import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

// declare let gtag: (property: string, value: any, configs: any) => {};
declare var gtag : any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  constructor( 
    public router : Router,
)
{


  // this.router.events.subscribe(event => {
  //   if (event instanceof NavigationEnd) {
  //     gtag('config', environment.googleAnalyticsId, {
  //       'page_path': event.urlAfterRedirects
  //     });
  //   }
  // });


}
}
