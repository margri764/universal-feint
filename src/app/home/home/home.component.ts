import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/services/cards.service';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  featuresCards : any= [];
  imgWidth : any;

  constructor(
              private _card : CardsService,
              private meta: Meta,
              private title : Title,

  ) { 
    this.featuresCards = this._card.getCards();
 

  }




  ngOnInit(): void {

    this.title.setTitle("Desarrollo Paginas web - Crear Sitios web y Apps")
    this.meta.addTag({name:"description", content:"desarrollo web, crear sitios web, marketing digital, realico, la pampa, paginas web, app, aplicaciones web"});
    this.meta.addTag({name:"keywords", content:"desarrollo web, sitios web, marketing digital, realico, la pampa, paginas web, app"});
  

  }



}
