import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-room-availability',
  templateUrl: './confirm-room-availability.page.html',
  styleUrls: ['./confirm-room-availability.page.scss'],
})
export class ConfirmRoomAvailabilityPage implements OnInit {

  accepted: boolean = false;
  declined: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  accept(){
  	this.accepted = true;
  	this.declined = false;
  }

  decline(){
  	this.accepted = false;
  	this.declined = true;
  }

}
