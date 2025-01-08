import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { DataSharedService } from './services/data-shared.service';
import { CommonModule } from '@angular/common';
import { UserAgentService } from './services/user-agent.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SideNavComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('sidenavFadeIn', [
      state('open', style({
        opacity: 1,
        transform: 'translateX(0%)'
      })),
      state('closed', style({
        opacity: 0,
        transform: 'translateX(-100%)'
      })),
      transition('closed => open', [
        animate('1s ease-in-out', style({
          opacity: 1,
          transform: 'translateX(0)'
        }))
      ]),
      transition('open => closed', [
        animate('0.2s ease-in-out', style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }))
      ]),
    ]),
    trigger('fadeIn', [
      state('void', style({
        opacity: 0,
        transform: 'translateX(-100%)'
      })),
      transition(':enter', [
        animate('1s ease-in-out', style({
          opacity: 1,
          transform: 'translateX(0)'
        }))
      ]),
      transition(':leave', [
        animate('0.2s ease-in-out', style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }))
      ]),
    ]),
    trigger('openMenuBgFromHamburgerBtn', [
      state('void', style({
        height:"6vh",
        width: "3vw",
        top: "5%",
        right:"7.5%",
        borderRadius: "50%"
      })),
      transition(':enter', [
        animate('0.7s ease-in-out', style({
          height:"100vh",
          width: "100vw",
          top: "0",
          right:"0",
          borderRadius: "0"
        }))
      ]),
      transition(':leave', [
        animate('0.4s ease-in-out', style({
          height:"6vh",
          width: "3vw",
          top: "5%",
          right:"7.5%",
          borderRadius: "50%"
        }))
      ]),
    ]),
  ]
})
export class AppComponent {
  title = 'portfolio';
  isSideNavOpen: boolean = true;
  isDesktop!: boolean;
  isMenuOpen : boolean = false;

  constructor(private dataSharedService: DataSharedService, private userAgentService: UserAgentService, private router:Router){}
  
  ngOnInit(){
    this.dataSharedService.sideNavVisibility$.subscribe((response)=>{
      if(this.isSideNavOpen){
        this.isSideNavOpen = response;
      }
      else{
        setTimeout(() => {
          this.isSideNavOpen = !this.isSideNavOpen;
        }, 600);
      }
      if(!this.isMenuOpen){
        setTimeout(() => {
          this.isMenuOpen = !this.isMenuOpen;
        }, 650);
      }
      else{
        this.isMenuOpen = !this.isMenuOpen;
      }
    });
    this.isDesktop = !this.userAgentService.isMobile();
  }

  navigateTo(path:string){
    this.dataSharedService.clickHamburgerButton(true);
    setTimeout(() => {
      this.router.navigate([path]);
    }, 1000);
  }
}
