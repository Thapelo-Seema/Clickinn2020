import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agent-admin',
  templateUrl: './agent-admin.page.html',
  styleUrls: ['./agent-admin.page.scss'],
})
export class AgentAdminPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoSearch(){
  	this.router.navigate(['/search']);
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
