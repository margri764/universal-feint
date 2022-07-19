import { Component,  OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CardsService } from 'src/app/services/cards.service';
import { ValidatorService } from 'src/app/services/validator.service';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {


quantity:any;
array: any []=[] 
string:any;
clicked:boolean= false;
hidden: boolean = false;
showSpinner : boolean = false;



myForm:FormGroup = this.fb.group({
name:    ['', [Validators.required]],
email:   ['', [Validators.required,Validators.pattern( this.validatorservice.emailPattern)]],
phone:   ['', [Validators.required]],
message :['']
});



  constructor(
              private messageService: CardsService,
              private validatorservice : ValidatorService,
              private router : Router,
              private fb : FormBuilder,
              private meta: Meta,
              private title : Title,
    
              )

  {}


  validField( field: string ) {

    return this.myForm.controls[field].errors 
            && this.myForm.controls[field].touched;
  }







  ngOnInit(): void {




    this.title.setTitle("contacto-con-desarrollo-web")
    this.meta.addTag({name:"description", content:"desarrollo web, crear sitios web, marketing digital, realico, la pampa, paginas web, app, aplicaciones web, contacto, email,"});
    this.meta.addTag({name:"keywords", content:"contacto, formulario, email, whatsapp, desarrollo web, sitios web, marketing digital, realico, la pampa, paginas web, app"});
    this.meta.addTag({name:"author", content:"FeintdEvs"});
    this.meta.addTag({name:"robots", content:"index, follow"});
  }

  
    sendForm (){
      if ( this.myForm.invalid ) {
        this.myForm.markAllAsTouched();
        return;
      }
     
      this.showSpinner = true;
  
        this.messageService.sendMessage(this.myForm.value).subscribe( (res) => {
            if (res=='true') {
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Mensaje Enviado correctamente!!',
                showConfirmButton: false,
                timer: 3000
                });
                this.clicked = true;
                this.showSpinner = false;
                this.myForm.reset();
       
           }
          //  this.router.navigateByUrl('gratitude')
          })    
              
   }
}