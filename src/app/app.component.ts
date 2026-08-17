import { Component, signal, OnInit, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { projects } from './utils/Projects';
import { calculateExperience, ExperienceDuration } from './utils/Experience';
import { skillCategories } from './utils/Skills';
import { educationList } from './utils/Education';
import { certificatesList } from './utils/Certifications';
import { Mission, missions } from './utils/Missions';
import { menuOptions } from './utils/MenuOptions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  animations: [
    trigger('eyelidOpen', [
      state('closed', style({
        transform: 'scaleY(1)'
      })),
      state('open', style({
        transform: 'scaleY(0)'
      })),
      transition('closed => open', [
        animate('1s cubic-bezier(0.77, 0, 0.175, 1)')
      ])
    ]),
    // New animation for peeling back normal Kakashi to reveal Sharingan Kakashi
    trigger('sharinganReveal', [
      state('dormant', style({ opacity: 0, transform: 'scale(0.95)' })),
      state('active', style({ opacity: 1, transform: 'scale(1)' })),
      transition('dormant <=> active', animate('600ms cubic-bezier(0.4, 0, 0.2, 1)'))
    ]),
    trigger('sharinganPulse', [
      state('dormant', style({ transform: 'scale(0.9)', opacity: 0.6, filter: 'grayscale(100%)' })),
      state('active', style({ transform: 'scale(1)', opacity: 1, filter: 'grayscale(0%) drop-shadow(0 0 35px rgba(56, 189, 248, 0.8))' })),
      transition('dormant <=> active', animate('500ms ease-in-out'))
    ]),
    trigger('scrollUnroll', [
      state('closed', style({ height: '0px', opacity: 0, overflow: 'hidden' })),
      state('open', style({ height: '*', opacity: 1, overflow: 'hidden' })),
      transition('closed <=> open', animate('300ms cubic-bezier(0.4, 0, 0.2, 1)'))
    ])
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router
  ) {}

  menuOptions = menuOptions;
  mobileScreen = window.innerWidth < 768; // Check if the screen width is less than 768px
  mobileMenuOpen = false;
  eyeState = signal('closed');
  sharinganActive = signal(true);
  isFlashing = signal(false);
  messageSent = signal(false);
  selectedMission = signal<Mission | null>(null);
  exp: ExperienceDuration = { exYear: 0, exMonths: 0, exDays: 0 };
  showNotification = signal(false);
  notificationMessage = signal('');

  quotes = [
    "My name is Srishti Sharma. Things I like? I don't feel like telling you that.",
    "Sorry I'm late, a black cat crossed my path so I had to take the long way around.",
    "In the coding world, those who break the rules are trash... but those who abandon their friends are worse than trash.",
    "Copying over 1000 techniques taught me one thing: clean architecture is everything."
  ];
  currentQuoteIndex = 0;
  currentQuote = signal(this.quotes[0]);

  // Dynamic Background Image Getter
  get currentBgImage(): string {
    return this.sharinganActive() 
      ? "url('assets/download.jpg')" 
      : "url('assets/kakashi.jpg')";
  }

  // Dynamic Avatar Image Getter
  get currentAvatarImg(): string {
    return this.sharinganActive() 
      ? 'assets/download.jpg' 
      : 'assets/kakashi.jpg';
  }

  projects = projects; // Using the signal from Projects.ts

  // Track how many scrolls to display initially (e.g., 3)
  visibleLimit = signal(3);

  // Computed property that slices the array based on the current limit
  displayedProjects = computed(() => {
    return this.projects().slice(0, this.visibleLimit());
  });

  // Check if there are still hidden projects left to show
  hasMoreProjects = computed(() => {
    return this.visibleLimit() < this.projects().length;
  });

  // Load more projects handler (reveals 3 more at a time)
  loadMoreProjects() {
    this.visibleLimit.update(current => current + 3);
  }

  // Collapse back to default view
  collapseProjects() {
    this.visibleLimit.set(3);
    this.router.navigate([], { fragment: 'scrolls', replaceUrl: true }); // Navigate to the scrolls section
  }

  skillCategories = skillCategories; // Using the signal from Skills.ts

  educationList = educationList; // Using the signal from Education.ts

  certificatesList = certificatesList; // Using the signal from Certifications.ts

  missions = missions; // Using the signal from Missions.ts

  ngOnInit() {
    setTimeout(() => {
      this.eyeState.set('open');
    }, 300);
    this.exp = this.calculateExperience(new Date(2019, 6, 15)); // Assuming experience starts from July 15, 2019

    this.triggerNotification("Please use a desktop browser for the best experience. Mobile view is under development.");
  }

  toggleSharingan() {
    this.sharinganActive.update(active => !active);
  }

  cycleQuote() {
    this.currentQuoteIndex = (this.currentQuoteIndex + 1) % this.quotes.length;
    this.currentQuote.set(this.quotes[this.currentQuoteIndex]);
  }

  toggleProject(index: number) {
    this.projects.update(list => {
      list[index].isOpen = !list[index].isOpen;
      return [...list];
    });
  }

  submitForm(event: Event) {
    event.preventDefault();
    this.messageSent.set(true);
  }

  onSectionHoverOrEnter() {
    this.eyeState.set('closed');
    this.sharinganActive.set(false);

    setTimeout(() => {
      this.isFlashing.set(true);

      setTimeout(() => {
        this.isFlashing.set(false);
        this.eyeState.set('open');
        this.sharinganActive.set(true);
      }, 300);
    }, 400);
  }

  selectMission(mission: Mission) {
    this.selectedMission.set(mission);
  }

  calculateExperience(startDate: Date): ExperienceDuration {
    return calculateExperience(startDate);
  }

  // Call this function whenever you want to trigger the popup
  triggerNotification(message: string) {
    this.notificationMessage.set(message);
    this.showNotification.set(false);

    // Automatically hide after 5 seconds (5000 milliseconds)
    setTimeout(() => {
      this.showNotification.set(false);
    }, 5000);
  }

  scrollToSection(sectionId: string) {
    // Close the mobile menu
    this.mobileMenuOpen = false;

    // Find the target element and scroll smoothly
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  setMissionRankPin(rank: string): string{
    if(rank[1] != '-'){
      return rank.substring(0, 2);
    }

    return rank[0];
  }
}