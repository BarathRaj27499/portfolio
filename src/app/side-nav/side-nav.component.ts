import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  currentRoutePath: string;

  constructor(private router:Router){
    this.currentRoutePath = this.router.url;

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const urlContentArray = event.url.split('/');
        this.currentRoutePath = urlContentArray[urlContentArray.length - 1];
      }
    });
  }

  navigate(path: string){
    this.router.navigate([path]);
  }
}
