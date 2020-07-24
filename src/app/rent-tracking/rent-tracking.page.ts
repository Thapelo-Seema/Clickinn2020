import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rent-tracking',
  templateUrl: './rent-tracking.page.html',
  styleUrls: ['./rent-tracking.page.scss'],
})
export class RentTrackingPage implements OnInit {

  julToDec: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  showJulyToDecember(){
  	this.julToDec = true;
  }

  showJanToJun(){
  	this.julToDec = false;
  }

}
