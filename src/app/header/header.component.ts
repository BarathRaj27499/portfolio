import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataSharedService } from '../services/data-shared.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  animations: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor(private dataSharedService: DataSharedService){}

  portFolioOwnername : string = "Barath Raj Thangaraju";
  isSideNavOpen : boolean = true;
  @ViewChild("hamBurgerBtn") hamBurgerBtn!:ElementRef;
  isOpen = false;
  isTransitioning: boolean = false;

  ngOnInit(){
    this.dataSharedService.hamburgerBtnClick$.subscribe((response)=>{
      this.onHamBurgerClick();
    });
  }

  onHamBurgerClick() {
    this.isOpen = !this.isOpen;
    this.isTransitioning = !this.isTransitioning;
    this.dataSharedService.setSideNavVisibility(!this.isSideNavOpen);
    this.isSideNavOpen =!this.isSideNavOpen;
    this.hamBurgerBtn.nativeElement.classList.toggle("active");
  }
}
