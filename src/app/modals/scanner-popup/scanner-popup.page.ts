import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scanner-popup',
  templateUrl: './scanner-popup.page.html',
  styleUrls: ['./scanner-popup.page.scss'],
})
export class ScannerPopupPage implements OnInit {

  constructor(public modalCtrl: ModalController, public router: Router) { }

  ngOnInit() {
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
  	this.router.navigate(['/results']);
  }

}
