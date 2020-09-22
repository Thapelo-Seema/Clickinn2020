import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-searchfeed-filtering',
  templateUrl: './searchfeed-filtering.page.html',
  styleUrls: ['./searchfeed-filtering.page.scss'],
})
export class SearchfeedFilteringPage implements OnInit {
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
