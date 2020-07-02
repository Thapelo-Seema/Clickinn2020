import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landlord-home',
  templateUrl: './landlord-home.page.html',
  styleUrls: ['./landlord-home.page.scss'],
})
export class LandlordHomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoSearchFeed(){
  	this.router.navigate(['/search-feed']);
  }

  gotoUploadListing(){
  	this.router.navigate(['/upload-listing']);
  }

  gotoListings(){
  	//this.router.navigate(['/my-listings']);
  }

  gotoLeases(){
  	//this.router.navigate(['/my-leases']);
  }

  gotoTracking(){
  	//this.router.navigate(['/placement-tracking']);
  }

}
