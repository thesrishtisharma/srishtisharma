import { animate, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { colors } from './colors';

interface EducationItem {
  cert: string;
  issuer: string;
  score?: string;  // Make score optional
  completion: string;
}

interface EducationCategory {
  name: string;
  data: EducationItem[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './layout.css', './navbar.css', './about.css', './skills.css', './workexp.css', './project.css'],
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
        style({transform: 'translateY(200px)'}),
        animate(2000)
      ])
    ])
  ]
})
export class AppComponent implements AfterViewInit, OnInit{
  title = 'Srishti Sharma';
  constructor(private renderer: Renderer2){ }

  @ViewChild('darkModeSwitch', { read: ElementRef }) element: ElementRef | undefined;

  myName: string = "< Srishti Sharma />";
  displayName: string = "";
  displayedName: string[] = [];

  SrishtiSharma_Copyrights: string = "© "+new Date().getFullYear()+". Srishti Sharma. All rights reserved."

  atChar: string = "@";

  darkModeActive: boolean = false;
  checked = true;
  disabled = false;
  
  colorMap = colors;

  startDate = new Date(2019, 6, 15); // months are 0 based indexed
  years: Number = 0;
  months: Number = 0;
  days: Number = 0;

  //  new ProjectStructure(name, desc, skills, ref) 
  imgDir: string = "../assets/images/projects/";
  projects = [{
      name: "SC Communication",
      desc: "An angular website that uses google cloud storage to store its unstructured data (images/videos) to demonstrate its work.",
      skills: ["Angular", "Google APIs", "Cloud Storage"],
      ref: "https://sccommunication.vercel.app/",
      img: this.imgDir + "scCommunication.png"
    },
    {
      name: "Portfolio Application",
      desc: "My professional portfolio webapp",
      skills: ["Angular", "HTML", "CSS", "Bootstrap"],
      ref: "#",
      img: this.imgDir + "myPortfolio.png"
    },
    {
      name: "Anaplan Connector",
      desc: "An interoperability connector that connects any http client (source system) with Anaplan with the help of Google Cloud Platform (Approaches: Real time & Bulk Data).",
      skills: ["Java", "Spring", "GCP – Pub/Sub", "Cloud Run", "Cloud Storage", "Cloud Logging", "Anaplan APIs", "HTML", "CSS", "Bootstrap"],
      ref: "#",
      img: this.imgDir + "anaplanConnector.png"
    },
    {
      name: "Swagger | Spring | Google APIs",
      desc: "A swagger rest API client based on Google cloud storage APIs. And a data collector services that uses the APIs and stores the specific data to database. Only users having access to the particular endpoint can now access the new API that gives result from the database.",
      skills: ["Java", "Spring Boot", "Spring Security", "Google Cloud Storage APIs", "Open API Spec", "Postman", "H2 In Memory DB"],
      ref: "https://github.com/thesrishtisharma/Swagger-SpringBoot-GoogleAPI.git",
      img: this.imgDir + "swaggerSpringGoogle.png"
    },
    {
      name: "Restaurant App - UX",
      desc: "UX Design project for ordering food from design. Supported devices: mobile",
      skills: ["Wireframe", "Prototyping", "Figma"],
      ref: "https://www.figma.com/proto/s0dNwxGXAIVK7nsm3N48r3/Google-UX-Invitation-Project?node-id=50-124&scaling=scale-down&page-id=46%3A2&starting-point-node-id=46%3A4",
      img: this.imgDir + "restAppUx.png"
    },
    {
      name: "Recipe Guide - UX",
      desc: "UX Design project for preparing food via recipes tutorials. Supported devices: laptop/desktop",
      skills: ["Wireframe", "Prototyping", "Adobe XD"],
      ref: "https://xd.adobe.com/view/297881c5-d1f9-40a9-91e0-4ebc43a7f448-7c2b/",
      img: this.imgDir + "recipeGuideUx.png"
    },
    {
      name: "Indian Bank Branch Locator",
      desc: "A mobile application that serves Android and IOS. Purpose of the app is to pull IB branch details (like - address, contact, IFSC code, email id) based on city/zone selection made by the user.",
      skills: ["React native", "Node JS", "Swagger Open API"],
      ref: "https://thesrishtisharma.github.io/IB-Backend-API-Node/",
      img: this.imgDir + "ibLocator.png"
    },
    // {
    //   name: "Flowers Online E-Store",
    //   desc: "eCommerce webapp: A full-stack development project having 2 modules : customer & admin.",
    //   skills: ["Java", "Spring Boot", "Angular", "H2 In Memory DB"],
    //   ref: "https://thesrishtisharma.github.io/Flowers-Online-WebApp/",
    //   img: this.imgDir + "flowersOnline.png"
    // },
    // {
    //   name: "Hotel Reservation System",
    //   desc: "A full-stack development project to book hotel rooms online by checking availability.",
    //   skills: ["Java", "Spring MVC", "H2 In Memory DB", "JSP"],
    //   ref: "https://thesrishtisharma.github.io/Hotel-Reservation-WebApp/",
    //   img: this.imgDir + "hotelReservation.png"
    // },
    // {
    //   name: "Flight Admin System",
    //   desc: "A full-stack development project: to perform CRUD operations as flight admin | Only admin module",
    //   skills: ["Java", "Spring boot", "Angular", "My-SQL DB"],
    //   ref: "https://thesrishtisharma.github.io/Flight-Admin-System/",
    //   img: this.imgDir + "flightAdmin.png"
    // },
    // {
    //   name: "Car Re-selling Store",
    //   desc: "This is a mini webapp to re-sell the used cars as part of personal projects.",
    //   skills: ["Java", "Spring MVC", "JSP", "My-SQL DB"],
    //   ref: "https://thesrishtisharma.github.io/Best-Choice-Cars/",
    //   img: this.imgDir + "carStoreMini.png"
    // }
  ];

  // add most recents on top
  education_data: EducationCategory[] = [
    {
      name: 'Educational Degree',
      data: [
        {
          cert: 'Master of Technology',
          issuer: 'Birla Institute of Technology & Science (BITS), Pilani',
          score: '80%',
          completion: '2019 - 2024'
        },
        {
          cert: 'Bachelor of Computer Applications',
          issuer: 'VIPS affiliated to GGS IP University',
          score: '87.5%',
          completion: '2016 - 2019'
        },
        {
          cert: 'Higher Secondary Certificate',
          issuer: 'CBSE',
          score: '80.5%',
          completion: '2015 - 2016'
        },
        {
          cert: 'Secondary School Certificate',
          issuer: 'CBSE',
          score: '76%',
          completion: '2013 - 2014'
        }
      ]
    },
    {
      name: 'Skills & Certificates',
      data: [
        {
          cert: 'Full Stack Java Developer',
          issuer: 'Udemy',
          completion: 'Mar 26, 2023' 
        },
        {
          cert: 'Google Cloud Platform - Essentials',
          issuer: 'Udemy',
          completion: 'Sept, 2022' 
        },
        {
          cert: 'Google UX Design Professional',
          issuer: 'Coursera',
          completion: 'Feb 16, 2022' 
        },
        {
          cert: 'Full Stack Java Enterprise',
          issuer: 'Wipro',
          completion: 'Oct 14 2021' 
        },
        {
          cert: 'HTML5 and CSS3',
          issuer: 'Udemy',
          completion: 'Dec 23, 2017' 
        }
      ]
    }
    // ,{
    //   name: 'Recognitions & Others',
    //   data: [
    //     {
    //       cert: 'Achievement Certificate - Automating Project Work for Testers',
    //       issuer: 'Wipro',
    //       completion: '2023 - 2024'   
    //     },
    //     {
    //       cert: 'Inspiring Performance',
    //       issuer: 'Wipro',
    //       completion: 'Mar 24, 2023'   
    //     },
    //     {
    //       cert: 'Inspiring Performance',
    //       issuer: 'Wipro',
    //       completion: 'Jan 30, 2023'   
    //     },
    //     {
    //       cert: 'Inspiring Performance',
    //       issuer: 'Wipro',
    //       completion: 'Dec 12, 2022'   
    //     },
    //     {
    //       cert: 'Inspiring Performance',
    //       issuer: 'Wipro',
    //       completion: 'Nov 14, 2022'   
    //     },
    //     {
    //       cert: 'Habit Flagbearer – Demonstrating Stewardship',
    //       issuer: 'Wipro',
    //       completion: 'Jul 22, 2022'   
    //     },
    //     {
    //       cert: 'Habit Flagbearer – Building Trust',
    //       issuer: 'Wipro',
    //       completion: 'Feb 22, 2022'   
    //     },
    //     {
    //       cert: 'Employee of the Quarter',
    //       issuer: 'Wipro',
    //       completion: 'Q2 – 2020'   
    //     },
    //     {
    //       cert: 'Best Rookie',
    //       issuer: 'Wipro',
    //       completion: 'March 2020'   
    //     },
    //     {
    //       cert: 'Discipline Coordinator CSI - NSC',
    //       issuer: "Computer Society of India - National Student's Convention",
    //       completion: 'Jan 2018'   
    //     }
    //   ]
    // }
  ]
  loadEducation = this.education_data[0];
  selectedEducation = {name: this.loadEducation.name};

  projectsBar: {row: number, data: {name: string, desc: string, skills: string[], ref: string}[]}[] = [];

  smallScreen: boolean = false;
  
  ngOnInit(): void {
    this.smallScreen = window.innerWidth < 600;
    this.myName = this.smallScreen ? '< Srishti />' : this.myName;
    this.animateName();
    this.renderProjects();
    this.calculateExp();
    // this.timerId = setInterval(() => this.calculateExp(), 86400000); // update every day
  }
  
  mospi: string = window.innerWidth < 600 ? "MoSPI" : "Ministry of Statistics & Programme Implementation";
  experience_data = [
    {
      timeline: "Jan 2024 – Present",
      name: "IBM", 
      href: "https://www.ibm.com/in-en",
      role: "Software Engineer", 
      desc: "Working as a Full Stack Developer in an Automotive project (under finance domain) built on a secure & scalable microservices architecture - serving millions of users across US & Canada. Built and maintained several critical features end-to-end.",
      skills: ["Java", "Spring Boot", "Angular", "Git", "IBM DB2", "Rest APIs", "Swagger"]
    },
    {
      timeline: "Jan 2021 – Dec 2023",
      name: "Wipro", 
      href: "https://www.wipro.com/",
      role: "Software Engineer", 
      desc: "Built APIs for handling data integrations between HTTP applications and Anaplan (Financial planning & analysis tool). Documented low level integration designs & Open API specifications. Suggested best API choice to go with in order to integrate with the product (since by design, it provided 2 APIs supporting bulk data & transactional data respectively)",
      skills: ["Java", "Spring boot", "Anaplan", "Google Cloud Platform", "Rest APIs", "Swagger"]
    },
    {
      timeline: "July 2019 – Jan 2021",
      name: "Wipro", 
      href: "https://www.wipro.com/",
      role: "Sr. Technical Support Engineer", 
      desc: "Supported clients with respect to their storage server related issues, primarily Dell EMC's Centera - CAS Storage product. Provided root cause analysis and handled escalations. Helped with knowledge transfers to new team members.",
      skills: ["Linux", "Shell scripting", "Communication", "CAS Storage"]
    },
    {
      timeline: "June 2018 – Aug 2018",
      name: this.mospi, 
      href: "https://www.mospi.gov.in/",
      role: "Web Development Intern", 
      desc: "Worked as a web development intern to revamp one of the organization's internal website.",
      skills: ["HTML5", "CSS3", "JS", "PHP", "AJAX"]
    }
  ];

  ngAfterViewInit(): void {
    this.setIcon();
    // this.applyTheme();
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
    // console.log('I am now ', this.checked);
    this.setIcon();
    // this.applyTheme();
  }

  // applyTheme(){
  //   this.mode = this.checked ? "dark" : "light";
  //   this.textColor = this.checked ? colors.white : colors.black;
  //   this.s1TextColor = this.checked ? colors.wildBlueYonder : colors.black;
  //   this.nameTextColor = this.checked ? colors.lavenderWeb : colors.midnightBlue; 
  //   this.dscTextColor = this.checked ? colors.lavenderBlue : colors.midnightBlue;
  //   this.s4TextColor = this.checked ? colors.wildBlueYonder : colors.black;
  //   this.btnClass = this.checked ? "btn-light" : "btn-info";
  //   this.navbarText = this.checked ? colors.aquaMarine : colors.saddlebrown
  //   this.navbarColor = this.checked ? colors.black : colors.white;
  //   this.navNameColor = this.checked ? colors.white : colors.midnightBlue;
  // }
  
  animateName(): void{
    let idx = 0;
    let name = this.myName;
    this.displayedName = [];

    const intervalId = setInterval(() => {
      if (idx < name.length) {
        if(name.charAt(idx) == ' '){
          this.displayName += name.charAt(idx);
          this.displayedName.push('_');
        } else{
          this.displayName += name.charAt(idx);
          this.displayedName.push(name.charAt(idx));
        }
        idx++;
      } else {
        clearInterval(intervalId); // Stop once the entire name is revealed
      }
    }, 300); 

    console.log(this.displayedName);
  }

  reload(){
    window.location.reload();
  }

  showEducation(name: string){
    this.selectedEducation = {name};
    this.loadEducation = this.education_data.find(item => item.name === name)!;
  }

  renderProjects(){
    // 1 row should contain max of 3 projects
    let index: number = 0;
    let dataItems: {name: string, desc: string, skills: string[], ref: string}[] = [];

    for(let i = 0; i < this.projects.length; i++){
      dataItems.push(this.projects[i]); 
      if(dataItems.length === 3 || i === this.projects.length -1){
        this.projectsBar.push({row: index, data: dataItems});
        dataItems = [];
        index++;
      }  
    };
    // console.log(this.projectsBar);
  }

  goto_newPage(page: string){
    window.open(page, '_blank')
  }

  
  calculateExp(){
    const now = new Date();
    let years = now.getFullYear() - this.startDate.getFullYear();
    let months = now.getMonth() - this.startDate.getMonth();
    let days = now.getDate() - this.startDate.getDate();

    if(days < 0){
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
      months -= 1;
    }

    if(months < 0){
      months += 12;
      years -= 1;
    }

    this.years = years;
    this.months = months;
    this.years = years;
  }
}
