import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-management-admin',
  templateUrl: './management-admin.page.html',
  styleUrls: ['./management-admin.page.scss'],
})
export class ManagementAdminPage implements OnInit {

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
  	this.router.navigate(['/my-listings']);
  }

  gotoLeases(){
  	this.router.navigate(['/customize-lease']);
  }

  gotoTracking(){
  	this.router.navigate(['/placement-tracking']);
  }

}
