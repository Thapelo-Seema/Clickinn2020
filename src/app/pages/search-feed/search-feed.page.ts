import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SearchfeedFilteringPage } from '../../modals/searchfeed-filtering/searchfeed-filtering.page';

@Component({
  selector: 'app-search-feed',
  templateUrl: './search-feed.page.html',
  styleUrls: ['./search-feed.page.scss'],
})
export class SearchFeedPage implements OnInit {

  constructor(public modalCtrl: ModalController, private router: Router) { }

  ngOnInit() {
  }

  gotoHome(){
    this.router.navigate(['/landlord-home']);
  }

  async filters(){
  	const modal = await this.modalCtrl.create({
  		component: SearchfeedFilteringPage,
  		componentProps: {
  			'filterType': 'all'
  		}
  	});

  	return await modal.present();
  }

  async locationFilter(){
  	const modal = await this.modalCtrl.create({
  		component: SearchfeedFilteringPage,
  		componentProps: {
  			'filterType': 'location'
  		}
  	});

  	return await modal.present();
  }

}
