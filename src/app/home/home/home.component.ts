import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  featuresCards : any= [];
  imgWidth : any;

  constructor(
              private _card : CardsService
  ) { 
    this.featuresCards = this._card.getCards();
 

  }




  ngOnInit(): void {

  }



}
