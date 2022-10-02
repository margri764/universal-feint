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
    private gtmService: GoogleTagManagerService,
)
{



}
  ngOnInit(): void {
    this.router.events.forEach(item => {
      if (item instanceof NavigationEnd) {
        const gtmTag = {
          event: 'page',
          pageName: item.url
        };
  
        this.gtmService.pushTag(gtmTag);
      }
    });
  }
}