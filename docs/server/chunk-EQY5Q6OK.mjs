import './polyfills.server.mjs';
import{C as I,E as z,F as E,G as j,H as O,I as T,J as N,M as A,Q as L,T as U,a as C,b as x,c as y,d as f,e as k,f as w,g as o,h as b,i as D,j as c,k as u,l as i,m as n,n as m,o as S,p,q as g,r as a,s as _,t as M,u as P,v}from"./chunk-W4WO4M4Y.mjs";var F=(()=>{let r=class r{constructor(){this.title="PORTFOLIO_ADMIN"}};r.\u0275fac=function(s){return new(s||r)},r.\u0275cmp=C({type:r,selectors:[["app-root"]],standalone:!0,features:[P],decls:1,vars:0,template:function(s,l){s&1&&m(0,"router-outlet")},dependencies:[O,L]});let t=r;return t})();function G(t,r){if(t&1){let e=S();i(0,"a",7),p("click",function(){x(e);let s=g();return y(s.logout())}),a(1,"Logout"),n()}}function $(t,r){if(t&1&&(i(0,"section",21)(1,"div",22)(2,"div",23),m(3,"img",24),n(),i(4,"div",25)(5,"div",26)(6,"h1"),a(7),n(),i(8,"h1"),a(9),n()(),i(10,"p"),a(11),n()()()()),t&2){let e=g();o(7),M("",e.userDetailsModel==null?null:e.userDetailsModel.authDetailModel.firstName," "),o(2),M("",e.userDetailsModel==null?null:e.userDetailsModel.authDetailModel.lastName," "),o(2),M(" ",e.userDetailsModel==null?null:e.userDetailsModel.description," ")}}function W(t,r){if(t&1&&(i(0,"div")(1,"div",30)(2,"div",31),m(3,"i",32),n(),i(4,"h1"),a(5),n(),i(6,"p"),a(7),n()()()),t&2){let e=r.$implicit,d=r.index;o(1),D("data-aos-delay",200*(d+1)),o(4),_(e==null?null:e.serviceName),o(2),M(" ",e==null?null:e.serviceDescription," ")}}function Y(t,r){if(t&1&&(i(0,"section",27)(1,"div",22)(2,"div",15)(3,"h1"),a(4,"Services"),n(),i(5,"h6"),a(6,"What can I do for you"),n()(),i(7,"div",28),u(8,W,8,3,"div",29),n()()()),t&2){let e=g();o(8),c("ngForOf",e.userDetailsModel==null?null:e.userDetailsModel.serviceDetailModels)}}function K(t,r){if(t&1&&(i(0,"div",35)(1,"div",36),m(2,"img",37),n(),i(3,"div",38)(4,"h1"),a(5),n(),i(6,"p"),a(7),n(),i(8,"a",39),a(9,"View Details"),n()()()),t&2){let e=g().$implicit;o(2),c("src",e.projectImage,f),o(3),_(e==null?null:e.projectName),o(2),_(e==null?null:e.projectDescription),o(1),c("href",e==null?null:e.projectLink,f)}}function Q(t,r){if(t&1&&(i(0,"div",35)(1,"div",40)(2,"h1"),a(3),n(),i(4,"p"),a(5),n(),i(6,"a",39),a(7,"View Details"),n()(),i(8,"div",41),m(9,"img",37),n()()),t&2){let e=g().$implicit;o(3),_(e==null?null:e.projectName),o(2),_(e==null?null:e.projectDescription),o(1),c("href",e==null?null:e.projectLink,f),o(3),c("src",e==null?null:e.projectImage,f)}}function X(t,r){if(t&1&&(i(0,"div"),u(1,K,10,4,"div",34)(2,Q,10,4,"div",34),n()),t&2){let e=r.even,d=r.odd;o(1),c("ngIf",d),o(1),c("ngIf",e)}}function Z(t,r){if(t&1&&(i(0,"section",33)(1,"div",22)(2,"div",15)(3,"h1"),a(4,"Portfolio"),n(),i(5,"h6"),a(6,"View my recent work"),n()(),u(7,X,3,2,"div",29),n()()),t&2){let e=g();o(7),c("ngForOf",e.userDetailsModel==null?null:e.userDetailsModel.projectModels)}}function ee(t,r){if(t&1&&(i(0,"ul")(1,"li",44)(2,"h1"),a(3),n(),i(4,"p"),a(5),n()()()),t&2){let e=r.$implicit;o(3),_(e.companyName),o(2),M(" ",e.jobDescription," ")}}function te(t,r){if(t&1&&(i(0,"section",42)(1,"div",22)(2,"div",15)(3,"h1"),a(4,"Work Experience"),n(),i(5,"h6"),a(6,"Past and current jobs"),n()(),i(7,"div",43),u(8,ee,6,2,"ul",29),n()()()),t&2){let e=g();o(8),c("ngForOf",e.userDetailsModel==null?null:e.userDetailsModel.experienceDetailModels)}}function ne(t,r){if(t&1&&(i(0,"li")(1,"a",45),m(2,"i",46),n()()),t&2){let e=g();o(1),c("href",e.userDetailsModel==null?null:e.userDetailsModel.socialMediaDetailsModel.linkedinUrl,f)}}function ie(t,r){if(t&1&&(i(0,"li")(1,"a",45),m(2,"i",47),n()()),t&2){let e=g();o(1),c("href",e.userDetailsModel==null?null:e.userDetailsModel.socialMediaDetailsModel.fbUrl,f)}}function oe(t,r){if(t&1&&(i(0,"li")(1,"a",45),m(2,"i",48),n()()),t&2){let e=g();o(1),c("href",e.userDetailsModel==null?null:e.userDetailsModel.socialMediaDetailsModel.instaUrl,f)}}var J=t=>({open:t}),V=(()=>{let r=class r{constructor(d,s){this.el=d,this.renderer=s,this.owner=!1,this.isMenuOpen=!1}ngOnInit(){this.userDetailsModel={authDetailModel:{firstName:"Abhishek",lastName:"Upadhyaya"},description:"I am an enthusiastic Angular Developer dedicated to crafting immersive and innovative web experiences. With a keen eye for detail and a passion for cutting-edge technologies, I thrive in creating responsive and scalable applications that leave a lasting impact on users.",serviceDetailModels:[{serviceName:"Angular",serviceDescription:"Experienced Angular developer with 1.5 years of hands-on expertise in building dynamic and responsive web applications. Proficient in TypeScript and JavaScript, adept at leveraging Angular's features to create scalable and maintainable front-end solutions."},{serviceName:"JavaScript and Java",serviceDescription:"I prefer Java for data structures and algorithms. As an Angular developer, I initially began my journey with JavaScript and have now transitioned to TypeScript, as both languages share some similarities in syntax."},{serviceName:"Azure Devops/Git",serviceDescription:"Proficient in utilizing Azure DevOps and Git for streamlined version control, automated CI/CD pipelines, and efficient collaboration in software development projects. "},{serviceName:"Firebase",serviceDescription:"Implemented Firebase Messaging,Notification, Analytics"},{serviceName:"HTML/CSS",serviceDescription:"Basic needs of a web developer \u2744\uFE0F"}],projectModels:[{projectName:"Snake game",projectDescription:"It's a simple snake game, go get your hands dirty. Nostalgia will hit you for sure.",projectLink:"https://abhishekupadhyaya477.github.io/SnakeGame.io/",projectImage:"assets/images/snakeGame.jpg"},{projectName:"Todo list",projectDescription:"Don't just procastinate things add your todos here so that you can make a track of it",projectLink:"https://abhishekupadhyaya477.github.io/TodoLists.io/",projectImage:"assets/images/todoList.png"},{projectName:"Covid buddy",projectDescription:"You can check live covid19 stats here",projectLink:"https://abhishekupadhyaya477.github.io/CovidBuddy/",projectImage:"assets/images/CovidLogo.png"}],experienceDetailModels:[{companyName:"Jio platforms limited",jobDescription:"My journey as a developer started with a strong foundation in HTML, CSS, and JavaScript. Over the year, I honed my skills in Angular, mastering its intricacies and exploring its vast ecosystem of libraries and tools."}],socialMediaDetailsModel:{linkedinUrl:"https://linkedin.com/in/Abhishek-upadhyaya",fbUrl:"https://www.facebook.com/abhi.upadhyaya.90/",instaUrl:"https://www.instagram.com/this__abhi.js/"}}}scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}toggleMenu(){this.isMenuOpen=!this.isMenuOpen}logout(){}scroll(d){document.getElementById(d).scrollIntoView({behavior:"smooth"})}redirectToMyLinkedIn(){window.open("https://www.linkedin.com/in/Abhishek-upadhyaya")}};r.\u0275fac=function(s){return new(s||r)(b(k),b(w))},r.\u0275cmp=C({type:r,selectors:[["app-portfolio"]],standalone:!0,features:[P],decls:39,vars:14,consts:[["id","abhi",1,"abhi"],[1,"menu-toggler",3,"ngClass","click"],[1,"bar","half","start"],[1,"bar"],[1,"bar","half","end"],[1,"top-nav",3,"ngClass"],[1,"nav-list"],[1,"nav-link",3,"click"],["class","nav-link",3,"click",4,"ngIf"],["class","about","id","about",4,"ngIf"],["class","services","id","services",4,"ngIf"],["class","portfolio","id","portfolio",4,"ngIf"],["class","experience","id","experience",4,"ngIf"],["id","contact",1,"contact"],["data-aos","fade-up","data-aos-delay","200",1,"container"],[1,"section-heading"],[4,"ngIf"],[1,"copyright"],["id","up",1,"up",3,"click"],[1,"fa","fa-chevron-up"],[1,"myName",3,"click"],["id","about",1,"about"],[1,"container"],["data-aos","fade-right","data-aos-delay","100",1,"profile-img"],["src","assets/images/abhi1.jpg","alt","test"],["data-aos","fade-left","data-aos-delay","200",1,"about-details"],[1,"about-heading"],["id","services",1,"services"],[1,"my-skills"],[4,"ngFor","ngForOf"],["data-aos","fade-right",1,"skill"],[1,"icon-container"],[1,"fa","fa-briefcase"],["id","portfolio",1,"portfolio"],["class","portfolio-item",4,"ngIf"],[1,"portfolio-item"],["data-aos","fade-right","data-aos-delay","100",1,"portfolio-img","has-margin-left"],["alt","could not load picture",3,"src"],["data-aos","fade-left","data-aos-delay","100",1,"portfolio-description"],["target","_blank",1,"cta",3,"href"],["data-aos","fade-right","data-aos-delay","100",1,"portfolio-description"],["data-aos","fade-left","data-aos-delay","100",1,"portfolio-img"],["id","experience",1,"experience"],["data-aos","fade-down","data-aos-delay","100",1,"timeline"],[1,"date"],["target","_blank",1,"icon-link",3,"href"],[1,"fab","fa-linkedin"],[1,"fab","fa-facebook-square"],[1,"fab","fa-instagram"]],template:function(s,l){s&1&&(i(0,"div",0)(1,"header")(2,"div",1),p("click",function(){return l.toggleMenu()}),m(3,"div",2)(4,"div",3)(5,"div",4),n(),i(6,"nav",5)(7,"ul",6)(8,"li")(9,"a",7),p("click",function(){return l.scroll("services")}),a(10,"Services"),n(),i(11,"a",7),p("click",function(){return l.scroll("portfolio")}),a(12,"Portfolio"),n(),i(13,"a",7),p("click",function(){return l.scroll("experience")}),a(14,"Experience"),n(),i(15,"a",7),p("click",function(){return l.scroll("contact")}),a(16,"Contact"),n(),u(17,G,2,0,"a",8),n()()()(),u(18,$,12,3,"section",9)(19,Y,9,1,"section",10)(20,Z,8,1,"section",11)(21,te,9,1,"section",12),i(22,"section",13)(23,"div",14)(24,"div",15)(25,"h1"),a(26,"Contact"),n(),i(27,"h6"),a(28,"Let's work together"),n()(),i(29,"div")(30,"ul",6),u(31,ne,3,1,"li",16)(32,ie,3,1,"li",16)(33,oe,3,1,"li",16),n()()()(),i(34,"footer",17)(35,"div",18),p("click",function(){return l.scrollToTop()}),m(36,"i",19),n(),i(37,"p",20),p("click",function(){return l.redirectToMyLinkedIn()}),a(38,"\xA9 2023 Abhishek Upadhyaya"),n()()()),s&2&&(o(2),c("ngClass",v(10,J,l.isMenuOpen)),o(4),c("ngClass",v(12,J,l.isMenuOpen)),o(11),c("ngIf",l.owner),o(1),c("ngIf",(l.userDetailsModel==null?null:l.userDetailsModel.description)!=null),o(1),c("ngIf",(l.userDetailsModel==null?null:l.userDetailsModel.serviceDetailModels)!=null),o(1),c("ngIf",(l.userDetailsModel==null?null:l.userDetailsModel.projectModels)!=null),o(1),c("ngIf",(l.userDetailsModel==null?null:l.userDetailsModel.experienceDetailModels)!=null),o(10),c("ngIf",(l.userDetailsModel==null?null:l.userDetailsModel.socialMediaDetailsModel.linkedinUrl)!=null),o(1),c("ngIf",(l.userDetailsModel==null?null:l.userDetailsModel.socialMediaDetailsModel.fbUrl)!=null),o(1),c("ngIf",(l.userDetailsModel==null?null:l.userDetailsModel.socialMediaDetailsModel.instaUrl)!=null))},dependencies:[O,z,E,j],styles:['.abhi[_ngcontent-%COMP%]{font-family:montserrat,sans-serif;color:#eee;width:100%;height:100%;background:url("./media/sitebg2-LNVJMHLB.jpg") no-repeat center fixed}section[_ngcontent-%COMP%]{padding:6rem,0}a[_ngcontent-%COMP%]{text-decoration:none;color:#eee}p[_ngcontent-%COMP%]{font-size:1.6rem;font-weight:300;margin-right:10px}img[_ngcontent-%COMP%]{width:100%;border-radius:5%}.container[_ngcontent-%COMP%]{width:90%;max-width:120rem;height:100%;margin:0 auto 5rem;position:relative}.section-heading[_ngcontent-%COMP%]{text-align:center;margin:10rem 0 5rem}.section-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3.5rem;color:#ffffff4d;text-transform:uppercase;font-weight:300;position:relative;margin-bottom:1rem}.section-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:before, .section-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:-.5rem;left:50%;transform:translate(-50%);background-color:#ffffffbf}.section-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:before{width:10rem;height:3px;border-radius:.8rem}.section-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:after{width:1.5rem;height:1.5rem;border-radius:100%;bottom:-1rem}.section-heading[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:1.4rem;font-weight:300}.has-margin-left[_ngcontent-%COMP%]{margin-right:5rem}header[_ngcontent-%COMP%]{width:100%;height:20vh}.top-nav[_ngcontent-%COMP%]{width:100%;height:100vh;position:fixed;top:-100vh;z-index:50;background-color:#16162d;border-bottom-right-radius:100%;border-bottom-left-radius:100%;transition:all .65s cubic-bezier(1,0,0,1);opacity:.95}.nav-list[_ngcontent-%COMP%]{list-style:none;width:100%;height:100%;display:flex;justify-content:space-evenly;align-items:center}li[_ngcontent-%COMP%]{margin:0 2rem}.nav-link[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:3rem;padding:1rem}.nav-link[_ngcontent-%COMP%]:hover, .nav-link[_ngcontent-%COMP%]:focus{color:salmon}.top-nav.open[_ngcontent-%COMP%]{top:0;border-radius:initial}.menu-toggler[_ngcontent-%COMP%]{position:absolute;top:5rem;right:5rem;width:5rem;height:4rem;display:flex;flex-direction:column;justify-content:space-between;cursor:pointer;z-index:1500;transition:transform .65s ease-in-out}.menu-toggler.open[_ngcontent-%COMP%]{transform:rotate(-45deg);position:fixed}.bar[_ngcontent-%COMP%]{background:linear-gradient(to right,#ffe838,#fd57bf);width:100%;height:4px;border-radius:.8rem}.bar.half[_ngcontent-%COMP%]{width:50%}.bar.start[_ngcontent-%COMP%]{transform-origin:right;transition:transform .65s cubic-bezier(.54,-.81,.57,.57)}.open[_ngcontent-%COMP%]   .bar.start[_ngcontent-%COMP%]{transform:rotate(-450deg) translate(.8rem)}.bar.end[_ngcontent-%COMP%]{align-self:flex-end;transform-origin:left;transition:transform .65s cubic-bezier(.54,-.81,.57,.57)}.open[_ngcontent-%COMP%]   .bar.end[_ngcontent-%COMP%]{transform:rotate(-450deg) translate(-.8rem)}.landing-text[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:100%;text-align:center;z-index:1}.landing-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:6rem;font-family:League Spartan Bold,sans-serif;padding:1rem;-webkit-user-select:none;user-select:none}.landing-text[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:2rem;font-weight:300}.about[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.about-heading[_ngcontent-%COMP%]{text-align:center;text-transform:uppercase;line-height:0;margin-bottom:6rem}.about-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:8rem;opacity:.4}.about-heading[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:2rem;font-weight:300}.profile-img[_ngcontent-%COMP%]{flex:1;margin-right:5rem}.about-details[_ngcontent-%COMP%]{flex:0}.social-media[_ngcontent-%COMP%]{margin-top:5rem}.social-media[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:5rem;transition:color .65s}.social-media[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:0 10%}.fa-facebook-square[_ngcontent-%COMP%]:hover{color:#3b5998}.fa-linkedin-square[_ngcontent-%COMP%]:hover{color:#2867b2}.fa-instagram[_ngcontent-%COMP%]:hover{color:#a123b5}.my-skills[_ngcontent-%COMP%]{margin-top:10 rem;display:grid;grid-template-columns:repeat(auto-fit,minmax(25rem,1fr));grid-gap:2.5rem;text-align:center}.skill[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:2rem}.skill[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-transform:uppercase;letter-spacing:2px;margin:2rem -2px 2rem 0}.icon-container[_ngcontent-%COMP%]{width:10rem;height:10rem;border:3px solid #ffe838;border-radius:10%;background:linear-gradient(to right,#38022c,#fd57bf);margin-bottom:2rem;display:flex;transform:rotate(45deg)}.icon-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#ffe838;font-size:5rem;margin:auto;transform:rotate(-45deg)}.portfolio-item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;margin-bottom:5rem}.portfolio-item[_ngcontent-%COMP%]:last-child{margin-bottom:0}.portfolio-img[_ngcontent-%COMP%]{width:20%}.profile-description[_ngcontent-%COMP%]{flex:1;width:65%}.profile-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-right:20px}.portfolio-description[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3rem;font-weight:300;margin:1rem 0}.portfolio-description[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:1.5rem;text-transform:uppercase;font-weight:300;opacity:.4}.portfolio-description[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%]{display:inline-block;margin-top:.5rem;margin-bottom:1.5rem;font-size:1.5rem;text-transform:uppercase;color:#3883ff;transition:color .65s}.portfolio-description[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%]:hover{color:#4267b2}.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{border-left:4px solid #ffe838;border-radius:.8rem;background-color:#0000000d;margin:0 auto;position:relative;padding:5rem;list-style:none;text-align:left;width:70%}.timeline[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2rem;text-transform:uppercase;font-weight:300;margin-bottom:1rem;opacity:.3}.timeline[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{border-bottom:1px solid rgba(255,255,255,.1);margin-bottom:1rem;padding-bottom:1rem;position:relative}.timeline[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]:last-of-type{padding-bottom:0;margin-bottom:0;border:none}.timeline[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]:before, .timeline[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]:after{position:absolute;display:block;top:50%;transform:translateY(-50%)}.timeline[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]:before{content:attr(data-date);left:-21rem;text-align:right;min-width:12rem;font-size:1.3rem}.timeline[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]:after{content:"";box-shadow:0 0 0 4px #a10680;border-radius:100%;left:-8rem;height:1.5rem;width:1.5rem;background-color:#313534}form[_ngcontent-%COMP%]{width:70%;margin:0 auto}form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:1.5rem}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{width:100%;padding:1rem;margin-bottom:5px;border:none;border-radius:.8rem;outline-color:#fd57bf}input[type=submit][_ngcontent-%COMP%]{width:initial;background:radial-gradient(#fd57bf,#38022c);color:#eee;padding:1rem 2rem;border-radius:.8rem;cursor:pointer;transition:color .65s}input[type=submit][_ngcontent-%COMP%]:hover{background-color:#fd57bf}.copyright[_ngcontent-%COMP%]{width:100%;text-align:center;background-color:#16162d;padding:2rem 0;position:relative}.up[_ngcontent-%COMP%]{position:absolute;width:5rem;height:5rem;background-color:#eee;top:-2.5rem;right:5rem;border-radius:100%;display:flex;animation:_ngcontent-%COMP%_pulse 2s infinite}.up[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#16162d;font-size:2rem;margin:auto;cursor:pointer}.copyright[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.4rem}.myName[_ngcontent-%COMP%]:hover{cursor:pointer}@keyframes _ngcontent-%COMP%_pulse{0%{box-shadow:0 0 #ff57bffc}70%{box-shadow:0 0 0 2rem #ff57bf00}to{box-shadow:0 0 #61405400}}@media screen and (max-width : 768px){.abhi[_ngcontent-%COMP%]{background:url("./media/gsn_2-TMLCHAL6.jpg") no-repeat center fixed;background-size:cover}.landing-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:8rem}.nav-link[_ngcontent-%COMP%]{display:flex;flex-direction:column;transition:color .65s}.nav-link[_ngcontent-%COMP%]:hover, .nav-link[_ngcontent-%COMP%]:focus{color:#827b7b}li[_ngcontent-%COMP%]{margin:2rem 0}.nav-link[_ngcontent-%COMP%]{font-size:4.5rem}.about-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:8rem}.section-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#ffffff8c;font-size:3rem}.about-details[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]{flex-direction:initial}.about-details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0 2rem}.icon-container[_ngcontent-%COMP%]{width:7rem;height:7rem;border:3px solid white;background:black}.icon-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:4rem;color:#fff}.fa-facebook-square[_ngcontent-%COMP%]:hover, .fa-linkedin-square[_ngcontent-%COMP%]:hover, .fa-instagram[_ngcontent-%COMP%]:hover{color:#6c6868}.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0 0 0 auto}.date[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem}.timeline[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]:before{left:-18.5rem}.timeline[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]:after{left:-5.9rem}.bar[_ngcontent-%COMP%]{background:linear-gradient(to right,white,black)}.top-nav[_ngcontent-%COMP%]{background:linear-gradient(to top,rgb(65,63,63),black)}.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{border-color:#fff}.timeline[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]:after{content:"";box-shadow:0 0 0 4px #fff;background-color:#313534}input[type=submit][_ngcontent-%COMP%], .copyright[_ngcontent-%COMP%]{background-color:#000}@keyframes pulse{0%{box-shadow:0 0 #fffffffc}70%{box-shadow:0 0 0 2rem #fffafa00}to{box-shadow:0 0 #fff0}}input[type=submit][_ngcontent-%COMP%]:hover{color:#221e3f;background-color:#fff}}@media screen and (max-width: 600px){.menu-toggler[_ngcontent-%COMP%]{top:2rem;right:2rem}.landing-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:8rem}.landing-text[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:1.4rem}.nav-link[_ngcontent-%COMP%]{font-size:3.5rem}.about[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{flex-direction:column}.profile-img[_ngcontent-%COMP%]{margin:0 0 7rem}.portfolio-item[_ngcontent-%COMP%]{flex-direction:column}.portfolio-img[_ngcontent-%COMP%]{width:10rem;margin:0 0 2rem;order:1}.portfolio-description[_ngcontent-%COMP%]{margin:0;order:2}form[_ngcontent-%COMP%]{width:100%}.up[_ngcontent-%COMP%]{right:2rem}}@media screen and (max-width: 480px){.about-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3rem}.my-skills[_ngcontent-%COMP%]{margin-top:2rem;display:grid;grid-template-columns:1fr;grid-gap:1.5rem;text-align:center}.skill[_ngcontent-%COMP%]{padding:1rem}.icon-container[_ngcontent-%COMP%]{width:6rem;height:6rem;border:2px solid white;border-radius:50%;background:linear-gradient(to right,#38022c,#fd57bf);margin-bottom:1rem;display:flex;align-items:center;justify-content:center;transform:rotate(45deg)}.icon-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff;font-size:3rem;transform:rotate(-45deg)}.skill[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-transform:uppercase;letter-spacing:2px;margin:1rem 0;font-size:1.8rem}.skill[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.4rem}}']});let t=r;return t})();var R=[{path:"home",component:V}];var q={providers:[U(R),N()]};var re={providers:[A()]},B=I(q,re);var ae=()=>T(F,B),ke=ae;export{ke as a};
