import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deposit-room-modal',
  templateUrl: './deposit-room-modal.page.html',
  styleUrls: ['./deposit-room-modal.page.scss'],
})
export class DepositRoomModalPage implements OnInit {

  verified: boolean = false;
  declined: boolean = false;
  constructor(public modalCtrl: ModalController, public router: Router) { }

  ngOnInit() {

    setTimeout(() =>{
      this.verified = true;
    }, 10000)
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  continue(){
  	this.dismiss();
  	this.router.navigate(['/deposit-payment']);
  }

}
