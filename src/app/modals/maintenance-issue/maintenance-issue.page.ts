import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-maintenance-issue',
  templateUrl: './maintenance-issue.page.html',
  styleUrls: ['./maintenance-issue.page.scss'],
})
export class MaintenanceIssuePage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
