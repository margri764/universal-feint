import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-gratitude',
  templateUrl: './gratitude.component.html',
  styleUrls: ['./gratitude.component.css']
})
export class GratitudeComponent implements OnInit {

  constructor(
    private router : Router
) { }

ngOnInit(): void {

setTimeout(()=>{

this.router.navigateByUrl('/home')
},4000)
}

}
