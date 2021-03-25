import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-success',
  templateUrl: './upload-success.page.html',
  styleUrls: ['./upload-success.page.scss'],
})
export class UploadSuccessPage implements OnInit {

  @Input() property_id: string;
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

  viewListing(){
    this.dismiss();
    this.router.navigate(['/listing/' + this.property_id]);
  }

}
