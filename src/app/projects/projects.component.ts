import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { of, delay } from 'rxjs';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
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
export class ProjectsComponent {
  @ViewChild('projectComponentDiv') projectComponentDiv!:ElementRef;
  
  ngAfterViewInit(){
    const elemtRef = this.projectComponentDiv.nativeElement;
    const elemtRef$ = of(elemtRef).pipe(delay(1500));
    elemtRef$.subscribe((response:HTMLElement)=>{
      response.classList.remove("overflow-hidden");
    });
  }

}
