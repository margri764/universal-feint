import { Component, ElementRef, HostListener, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

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
              private router : Router

  ) { 
    
  }

  goToGratitude(){

    setTimeout(()=>{
      this.router.navigateByUrl("/gracias-por-el-contacto");
    },1000)
  }



  ngOnInit(): void {
  }

}
