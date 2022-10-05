import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material/material.module';
import { GoogleTagManagerModule } from 'angular-google-tag-manager';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home/home.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
import { ContactUsComponent } from './contactUs/contact-us/contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GratitudeComponent } from './gratitude/gratitude/gratitude.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContactUsComponent,
    GratitudeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // GoogleTagManagerModule.forRoot({
    //   id: 'GTM-5S6TT48',
    
    // })
  ],
providers: [
  // { provide: 'googleTagManagerCSPNonce', useValue: 'CSP-NONCE' },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
