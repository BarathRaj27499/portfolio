import { trigger, state, style, transition, animate } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { of, delay } from 'rxjs';


@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
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
export class AboutMeComponent implements AfterViewInit {
  @ViewChild('aboutMeComponentDiv') aboutMeComponentDiv!: ElementRef;

  ngAfterViewInit() {
    const elemtRef = this.aboutMeComponentDiv.nativeElement;
    const elemtRef$ = of(elemtRef).pipe(delay(1000));
    elemtRef$.subscribe((response: HTMLElement) => {
      response.classList.remove("overflow-hidden");
    });
  }
}
