import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { of, delay } from 'rxjs';
import { DataSharedService } from '../services/data-shared.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css',
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
        trigger('fadeInGrow', [
          state('void', style({
            opacity: 0,
            transform: 'scale(0.5)', 
          })),
          transition(':enter', [
            animate('1s ease-in-out', style({
              opacity: 1, 
              transform: 'scale(1)',
            }))
          ]),
        ])
      ]
})
export class ContactMeComponent {
  @ViewChild('contactMeComponentDiv') contactMeComponentDiv!:ElementRef;
  @ViewChild('containerOne') containerOne!:ElementRef;
  @ViewChild('containerTwo') containerTwo!:ElementRef;
  isSideNavOpen: boolean = true;

  constructor(private dataSharedService: DataSharedService){}

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
    const elemtRef = this.contactMeComponentDiv.nativeElement;
    const elemtRef$ = of(elemtRef).pipe(delay(1000));
    elemtRef$.subscribe((response:HTMLElement)=>{
      response.classList.remove("overflow-hidden");
    });
  }
}
