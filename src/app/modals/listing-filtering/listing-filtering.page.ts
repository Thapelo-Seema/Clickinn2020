import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-listing-filtering',
  templateUrl: './listing-filtering.page.html',
  styleUrls: ['./listing-filtering.page.scss'],
})
export class ListingFilteringPage implements OnInit {

  @Input() filterType: string;
  funding: string = "";
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
