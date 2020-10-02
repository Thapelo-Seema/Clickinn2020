import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ListingFilteringPage } from '../../modals/listing-filtering/listing-filtering.page';

@Component({
  selector: 'app-my-listings',
  templateUrl: './my-listings.page.html',
  styleUrls: ['./my-listings.page.scss'],
})
export class MyListingsPage implements OnInit {

  constructor(public modalCtrl: ModalController, private router: Router) { }

  ngOnInit() {
  }

  gotoHome(){
    this.router.navigate(['/landlord-home']);
  }

  async filters(){
  	const modal = await this.modalCtrl.create({
  		component: ListingFilteringPage,
  		componentProps: {
  			'filterType': 'all'
  		}
  	});

  	return await modal.present();
  }

  async locationFilter(){
  	const modal = await this.modalCtrl.create({
  		component: ListingFilteringPage,
  		componentProps: {
  			'filterType': 'location'
  		}
  	});

  	return await modal.present();
  }

}
