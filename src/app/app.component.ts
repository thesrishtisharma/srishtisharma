import { animate, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({
          opacity: 0
        }),
        animate(2000)
      ])
    ]),
    trigger('slideY', [
      transition('void => *', [
        style({transform: 'translateY(20px)'}),
        animate(2000)
      ])
    ])
  ]
})
export class AppComponent implements AfterViewInit, OnInit{
  title = 'Srishti Sharma';

  constructor(private renderer: Renderer2){}

  @ViewChild('darkModeSwitch', { read: ElementRef }) element: ElementRef | undefined;

  darkModeActive: boolean = false;
  mode: string = "light";
  textColor: string = "black";
  s1TextColor: string = "black"; 
  nameTextColor: string = "#007397";
  dscTextColor: string = "#0080A7";
  s4TextColor: string = "black";
  btnClass: string = "btn-info";
  navbarText: string = "saddlebrown";
  navbarColor: string = "#E3E3E3";
  logo_image: string = "NoThemeLogo.png";
  checked = true;
  disabled = false;
  experience_data = [
    {
      name: "IBM", 
      role: "Software Engineer", 
      timeline: "Jan 24 – Present",
      desc: "• Design, develop, maintain microservices, front-end for the applications <br>• Managing database, and maintaining code versions using Git <br>• Creating unit test cases to test functionalities of the modules <br>• Preparing HLDs and LLDs, and API Integrations <br>• Automating front-end – using robot framework <br>• Skills used: Java, Spring Boot, Angular, Robot framework, Git, SQL, Rest APIs, Swagger  <br>• Clients included: Daimler trucks innovation center India (DTICI)"
    },
    {
      name: "Wipro", 
      role: "Software Engineer", 
      timeline: "Jan 21 – Dec 23",
      desc: "• Design, develop, maintain microservices, handling data integrations <br>• Carrying out proof of concepts, preparing LLDs <br>• Suggesting suitable APIs to perform integrations with respect to Anaplan <br>• Creating unit test cases to test functionalities of the modules <br>• Skills used: Java, Spring boot, Anaplan, Google Cloud Platform, Rest APIs, Swagger <br>• Clients included: Anaplan, British Telecom"
    },
    {
      name: "Wipro", 
      role: "Sr. Technical Support Engineer", 
      timeline: "July 19 – Jan 21",
      desc: "• Handling technical escalations with respect to server issues <br>• Providing root cause analysis for any issue that is caused in hardware as well as software <br>• Skills used: Linux, Shell scripting, Communication, CAS Storage <br>• Clients included: Dell EMC"
    },
    {
      name: "MoSPI", 
      role: "Web Development Intern", 
      timeline: "June 18 – Aug 18",
      desc: "• Revamping existing UI to the new defined one <br>• Skills used: HTML5, CSS3, JS, PHP, AJAX "
  }];
  loadExperience = this.experience_data[0];
  selectedExperience = {name: this.loadExperience.name, timeline: this.loadExperience.timeline};

          //  new ProjectStructure(name, desc, skills, ref) 
  projects = [
    {
      name: "Anaplan Connector",
      desc: "An interoperability connector that connects any http client (source system) with Anaplan with the help Google Cloud Platform (Approaches: Real time & Bulk Data).",
      skills: "Java, Spring, GCP – Pub/Sub, Cloud Run, Cloud Storage, Cloud Logging, Anaplan APIs, HTML, CSS, Bootstrap (Thymeleaf template engine)",
      ref: "#"
    },
    {
      name: "Swagger | Spring | Google APIs",
      desc: "A swagger rest API client based on Google cloud storage APIs. And a data collector services that uses the APIs and stores the specific data to database. Only users having access to the particular endpoint can now access the new API that gives result from the database.",
      skills: "Java, Spring Boot, Spring Security, Google Cloud Storage APIs, Open API Spec, Postman, H2 In Memory DB",
      ref: "https://github.com/thesrishtisharma/Swagger-SpringBoot-GoogleAPI.git"
    },
    {
      name: "SC Communication",
      desc: "An angular website that uses google cloud storage to store its unstructured data (images/videos) to demonstrate its work.",
      skills: "Angular, Google APIs, Cloud Storage",
      ref: "https://sccommunication.vercel.app/"
    },
    {
      name: "Restaurant App - UX",
      desc: "US Design project for ordering food from design. Supported devices: mobile",
      skills: "Wireframe, Prototyping, Figma",
      ref: "https://www.figma.com/proto/s0dNwxGXAIVK7nsm3N48r3/Google-UX-Invitation-Project?node-id=50-124&scaling=scale-down&page-id=46%3A2&starting-point-node-id=46%3A4"
    },
    {
      name: "Recipe Guide - UX",
      desc: "UX Design project for preparing food via recipes tutorials. Supported devices: laptop/desktop",
      skills: "Wireframe, Prototyping, Adobe XD",
      ref: "https://xd.adobe.com/view/297881c5-d1f9-40a9-91e0-4ebc43a7f448-7c2b/"
    },
    {
      name: "Flowers Online E-Store",
      desc: "eCommerce webapp to sell flowers: A full-stack development project. Had 2 modules : customer & admin.",
      skills: "Java, Spring Boot, Angular, H2 In Memory DB",
      ref: "https://thesrishtisharma.github.io/Flowers-Online-WebApp/"
    },
    {
      name: "Hotel Reservation System",
      desc: "A full-stack development project to book hotel rooms online by checking availability.",
      skills: "Java, Spring MVC, H2 In Memory DB, JSP",
      ref: "https://thesrishtisharma.github.io/Hotel-Reservation-WebApp/"
    },
    {
      name: "Flight Admin System",
      desc: "A full-stack development project: to perform CRUD operations as flight admin | Only admin module",
      skills: "Java, Spring boot, Angular, My-SQL DB",
      ref: "https://thesrishtisharma.github.io/Flight-Admin-System/"
    },
    {
      name: "Car Re-selling store",
      desc: "This is a mini webapp to re-sell the used cars as part of personal projects.",
      skills: "Java, Spring MVC, JSP, My-SQL DB",
      ref: "https://thesrishtisharma.github.io/Best-Choice-Cars/"
    }
  ];

  projectsBar: {row: number, data: {name: string, desc: string, skills: string, ref: string}[]}[] = [];

  ngOnInit(): void {
    this.renderProjects();
  }

  ngAfterViewInit(): void {
    this.setIcon();
    this.applyTheme();
  }

  setIcon() {
    if (this.element) {
      const targetSpan: HTMLElement = this.element.nativeElement.querySelector('.mat-slide-toggle-thumb');
      while (targetSpan.firstChild) {
        targetSpan.firstChild.remove();
      }
      const elem = this.renderer.createElement('span');
      const icon = this.checked ? 'light_mode' : 'dark_mode';
      elem.setAttribute('class', 'material-icons');
      elem.textContent = icon
      targetSpan.appendChild(elem);

      if(icon == 'dark_mode'){
        elem.setAttribute('style', 'color: white;')
      }
    }
  }

  changeTheme() {
    this.checked = !this.checked;
    console.log('I am now ', this.checked);
    this.setIcon();
    this.applyTheme();
  }

  applyTheme(){
    this.mode = this.checked ? "dark" : "light";
    this.textColor = this.checked ? "white" : "black";
    this.s1TextColor = this.checked ? "#a8b2d1" : "black";
    this.nameTextColor = this.checked ? "#e6f1ff" : "midnightBlue";
    this.dscTextColor = this.checked ? "#ccd6f6" : "midnightBlue";
    this.s4TextColor = this.checked ? "#a8b2d1" : "black";
    this.btnClass = this.checked ? "btn-light" : "btn-info";
    this.navbarText = this.checked ? "#64ffda" : "saddlebrown"
    this.navbarColor = this.checked ? "#0a192f" : "#e6f1ff";
    //this.logo_image = this.checked ? "S_Night_Logo.png" : "S_Light_Logo.png";
  }
  
  reload(){
    window.location.reload();
  }

  showExperience(name: string, timeline: string){
    this.selectedExperience = {name, timeline};
    this.loadExperience = this.experience_data.find(item => item.name === name && item.timeline === timeline)!;
  }

  renderProjects(){
    // 1 row should contain max of 3 projects
    let index: number = 0;
    let dataItems: {name: string, desc: string, skills: string, ref: string}[] = [];

    for(let i = 0; i < this.projects.length; i++){
      dataItems.push(this.projects[i]); 
      if(dataItems.length === 3 || i === this.projects.length -1){
        this.projectsBar.push({row: index, data: dataItems});
        dataItems = [];
        index++;
      }  
    };
    console.log(this.projectsBar);
  }
}
