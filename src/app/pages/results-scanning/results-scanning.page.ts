import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ScannerPopupPage } from '../../modals/scanner-popup/scanner-popup.page';

declare var google: any;

@Component({
  selector: 'app-results-scanning',
  templateUrl: './results-scanning.page.html',
  styleUrls: ['./results-scanning.page.scss'],
})
export class ResultsScanningPage implements OnInit {

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;
  map: any;

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
    setTimeout(() =>{
      this.filters();
    }, 5000)
  }

  ionViewDidEnter(){
  	this.showMap();
  }

  

  back(){
  	window.history.back();
  }

  showMap(){
   	const location = new google.maps.LatLng(-26.1833326, 27.992662696);
   	const options = {
   		center: location,
   		zoom: 14,
   		disableDefaultUI: true
   	}
   	this.map = new google.maps.Map(this.mapRef.nativeElement, options);
  }

  async filters(){
  	const modal = await this.modalCtrl.create({
  		component: ScannerPopupPage,
      cssClass: 'modalClass',
  		componentProps: {
  			'filterType': 'all'
  		}
  	});

  	return await modal.present();
  }

}
