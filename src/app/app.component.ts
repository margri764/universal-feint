import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { GoogleTagManagerService } from 'angular-google-tag-manager';

// declare let gtag: (property: string, value: any, configs: any) => {};
declare var gtag : any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {



  constructor( 
    public router : Router,
    private gtmService: GoogleTagManagerService,
)
{

  this.router.events.forEach(item => {
    if (item instanceof NavigationEnd) {
      const gtmTag = {
        event: 'page',
        pageName: item.url
      };

      this.gtmService.pushTag(gtmTag);
    }
  });


  // this.router.events.subscribe(event => {
  //   if (event instanceof NavigationEnd) {
  //     gtag('config', environment.googleAnalyticsId, {
  //       'page_path': event.urlAfterRedirects
  //     });
  //   }
  // });


}
}
