import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contactUs/contact-us/contact-us.component';
import { GratitudeComponent } from './gratitude/gratitude/gratitude.component';
import { HomeComponent } from './home/home/home.component';




  const routes: Routes = [
    { path: "", redirectTo: "desarrollo-paginas-web-crear-sitios-web-apps", pathMatch: 'full'},
    { path: 'desarrollo-paginas-web-crear-sitios-web-apps', component: HomeComponent},
    { path: 'contacto-con-desarrollo-web', component: ContactUsComponent}, 
    { path: 'gratitude', component: GratitudeComponent}, 
    { path: '**', redirectTo: 'desarrollo-paginas-web-crear-sitios-web-apps'},

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

