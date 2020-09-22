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

  gotoSearch(){
  	this.router.navigate(['/search']);
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

  gotoMaintenance(){
  	this.router.navigate(['/maintanence-tasks']);
  }

  gotoTracking(){
  	this.router.navigate(['/placement-tracking']);
  }

  gotoRentTracking(){
    this.router.navigate(['/rent-tracking']);
  }

}
