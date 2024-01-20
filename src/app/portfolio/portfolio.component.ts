import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit  {
  userDetailsModel:any;
  dates:any;
  owner: boolean=false;
  isMenuOpen: boolean=false;
  constructor(private el: ElementRef, private renderer: Renderer2){}
  ngOnInit(): void {
    // $(document).ready(function () {
    //   $('.menu-toggler').on('click', function () {
    //     $(this).toggleClass('open');
    //     $('.top-nav').toggleClass('open');
    //   });

    //   $('.top-nav .nav-link').on('click', function () {
    //     $('.menu-toggler').removeClass('open');
    //     $('.top-nav').removeClass('open');
    //   });

    //   $('nav a[href*="#"]').on('click', function () {
    //     $('html,.container').animate({
    //       scrollTop: $($(this).attr('href')).offset().top - 100
    //     }, 500);
    //   });

    //   $('#up').on('click', function () {
    //     $('html,.container').animate({
    //       scrollTop: 0
    //     }, 500);
    //   });
    // })
    this.userDetailsModel={
      authDetailModel:{
        firstName:'Abhishek',
        lastName:'Upadhyaya',
      },
      description:'I am an enthusiastic Angular Developer dedicated to crafting immersive and innovative web experiences. With a keen eye for detail and a passion for cutting-edge technologies, I thrive in creating responsive and scalable applications that leave a lasting impact on users.',
      serviceDetailModels:[
        {
          serviceName:'Angular',
          serviceDescription:`Experienced Angular developer with 1.5 years of hands-on expertise in building dynamic and responsive web applications. Proficient in TypeScript and JavaScript, adept at leveraging Angular's features to create scalable and maintainable front-end solutions.`,
        },
        {
          serviceName:'JavaScript and Java',
          serviceDescription:'I prefer Java for data structures and algorithms. As an Angular developer, I initially began my journey with JavaScript and have now transitioned to TypeScript, as both languages share some similarities in syntax.',
        },
        {
          serviceName:'Azure Devops/Git',
          serviceDescription:'Proficient in utilizing Azure DevOps and Git for streamlined version control, automated CI/CD pipelines, and efficient collaboration in software development projects. ',
        },
        {
          serviceName:'Firebase',
          serviceDescription:'Implemented Firebase Messaging,Notification, Analytics',
        },
        {
          serviceName:'HTML/CSS',
          serviceDescription:'Basic needs of a web developer ❄️',
        },
      ],
      projectModels: [
        {
          projectName: 'Snake game',
          projectDescription: `It's a simple snake game, go get your hands dirty. Nostalgia will hit you for sure.`,
          projectLink: 'https://abhishekupadhyaya477.github.io/SnakeGame.io/',
          projectImage: 'assets/images/snakeGame.jpg'
        },
        {
          projectName: 'Todo list',
          projectDescription: `Don't just procastinate things add your todos here so that you can make a track of it`,
          projectLink: 'https://abhishekupadhyaya477.github.io/TodoLists.io/',
          projectImage: 'assets/images/todo.png'
        },
        {
          projectName: 'Covid buddy',
          projectDescription: `You can check live covid19 stats here`,
          projectLink: 'https://abhishekupadhyaya477.github.io/CovidBuddy/',
          projectImage: 'assets/images/CovidLogo.png'
        }
      ],
      
      experienceDetailModels:[
        {
          companyName:'Jio platforms limited',
          jobDescription:'My journey as a developer started with a strong foundation in HTML, CSS, and JavaScript. Over the year, I honed my skills in Angular, mastering its intricacies and exploring its vast ecosystem of libraries and tools.'
        }
      ],
      socialMediaDetailsModel:{
        linkedinUrl:'https://linkedin.com/in/Abhishek-upadhyaya',
        fbUrl:'https://www.facebook.com/abhi.upadhyaya.90/',
        instaUrl:'https://www.instagram.com/this__abhi.js/',
      }
      
      }
    }
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }

    logout(){
  
    }
    scroll(event: string) {
      const a=document.getElementById(event) as HTMLInputElement;
      a.scrollIntoView({
        behavior: "smooth"
      });
    }
    redirectToMyLinkedIn(){
      window.open('https://www.linkedin.com/in/Abhishek-upadhyaya')
    }
    
  }


