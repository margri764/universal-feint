import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() emitShow= new EventEmitter<boolean>()


  show: boolean = true;

  constructor(  private route : Router
        
  ) { }

  ngOnInit(): void {
  }

  showToolbar(){
    this.emitShow.emit(this.show);
   
  }

  goToUrl(value : any): void {


    switch( value ) {
      case 'whatsapp' :
                  (window as any).open('https://wa.me/+542302690139?text=Hola!!%20', "_blank");
                  this.route.navigateByUrl('gracias-por-el-contacto')
       break;
      
      case 'gps': 
                  (window as any).open('https://goo.gl/maps/3fDrcSniMPY9TkQE9', "_blank");

      break;

      case 'cel': 
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Nos ponemos en contacto: +54 2302690139',
                showConfirmButton: false,
                });
     break;
    //  development@feintdevs.com
     case 'email': 
                (window as any).open('mailto:margri764@gmail.com', "_blank");
                this.route.navigateByUrl('gracias-por-el-contacto')
     break;
  
    }
}
  
}
