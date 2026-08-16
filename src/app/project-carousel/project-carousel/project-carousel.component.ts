import { Component, ViewChild } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Import Modules instead of individual components/directives
import { 
  IgxCarouselModule, 
  IgxCardModule, 
  IgxSelectModule, 
  IgxSwitchModule, 
  IgxButtonModule, 
  IgxInputGroupModule, 
  IgxCarouselComponent
} from 'igniteui-angular';

@Component({
  selector: 'app-project-carousel',
  standalone: true, // Required for the 'imports' property to work
  imports: [ 
    CommonModule,
    FormsModule, 
    TitleCasePipe,
    IgxCarouselModule, 
    IgxCardModule, 
    IgxSelectModule, 
    IgxSwitchModule, 
    IgxButtonModule, 
    IgxInputGroupModule 
  ],  
  templateUrl: './project-carousel.component.html',
  styleUrl: './project-carousel.component.css'
})
export class ProjectCarouselComponent {
  @ViewChild('carousel', { static: true }) public carousel!: IgxCarouselComponent;

  public animations = ['slide', 'fade', 'none'];
  public slides = [
    {
        description: '30+ Material-based Angular components to code speedy web apps faster.',
        heading: 'Ignite UI for Angular',
        image: 'https://www.infragistics.com/angular-demos-lob/assets/images/carousel/slide1-angular.png',
        link: 'https://www.infragistics.com/products/ignite-ui-angular'
      },
      {
        description: 'A complete JavaScript UI library empowering you to build data-rich responsive web apps.',
        heading: 'Ignite UI for Javascript',
        image: 'https://www.infragistics.com/angular-demos-lob/assets/images/carousel/slide2-ignite.png',
        link: 'https://www.infragistics.com/products/ignite-ui'
      },
      {
        description: 'Build full-featured business apps with the most versatile set of ASP.NET AJAX UI controls',
        heading: 'Ultimate UI for ASP.NET',
        image: 'https://www.infragistics.com/angular-demos-lob/assets/images/carousel/slide3-aspnet.png',
        link: 'https://www.infragistics.com/products/aspnet'
      }
  ];
}