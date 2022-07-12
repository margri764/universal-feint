import { Component, ElementRef, HostListener, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  isHovering : boolean = false;


    isHover(){
      this.isHovering= !this.isHovering;
    }

  constructor(
              private rendered : Renderer2,
               private element : ElementRef

  ) { 
    
  }




  ngOnInit(): void {
  }

}
