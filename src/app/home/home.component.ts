import { trigger, state, style, transition, animate } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { delay, of } from 'rxjs';
import { DataSharedService } from '../services/data-shared.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
    animations: [
      trigger('fadeInFromLeft', [
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
      ]),
      trigger('fadeInFromRight', [
        state('void', style({
          opacity: 0,
          transform: 'translateX(200%)'
        })),
        transition(':enter', [
          animate('1s ease-in-out', style({
            opacity: 1,
            transform: 'translateX(0)'
          }))
        ]),
      ]),
    ]
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('homeComponentDiv') homeComponentDiv!:ElementRef;
  name: string = "Barath Raj Thangaraju";
  role: string = "Front End Developer"
  profileSummary: string = "Angular Front-End Developer with 3+ years of experience crafting exceptional, responsive web applications. Also proficient in HTML, CSS, JavaScript, TypeScript, Bootstrap, and RxJS. I excel at building engaging and performant user interfaces.";
  isSideNavOpen: boolean = true;

  constructor(private dataSharedService:DataSharedService){

  }

  ngOnInit(){
    this.dataSharedService.sideNavVisibility$.subscribe((response)=>{
      if(response){
        setTimeout(() => {
          this.isSideNavOpen = response;
        }, 700);
      }
      else{
        this.isSideNavOpen = response;
      }
    });
  }

  ngAfterViewInit(){
    const elemtRef = this.homeComponentDiv.nativeElement;
    const elemtRef$ = of(elemtRef).pipe(delay(1000));
    elemtRef$.subscribe((response:HTMLElement)=>{
      response.classList.remove("overflow-hidden");
    });
  }
}
