import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { GoogleTagManagerService } from 'angular-google-tag-manager';


@Component({
  selector: 'app-gratitude',
  templateUrl: './gratitude.component.html',
  styleUrls: ['./gratitude.component.css']
})
export class GratitudeComponent implements OnInit {

  constructor( 
    public router : Router,
)
{



}
  ngOnInit(): void {

    setTimeout(()=>{
      this.router.navigateByUrl('/desarrollo-paginas-web-crear-sitios-web-apps')
    },4000)

  }
}