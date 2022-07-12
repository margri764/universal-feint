import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contactUs/contact-us/contact-us.component';
import { GratitudeComponent } from './gratitude/gratitude/gratitude.component';
import { HomeComponent } from './home/home/home.component';




  const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'contact-us', component: ContactUsComponent}, 
    { path: 'gratitude', component: GratitudeComponent}, 
    { path: '**', redirectTo: 'home'},

];


  @NgModule({
    imports: [
      RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}

