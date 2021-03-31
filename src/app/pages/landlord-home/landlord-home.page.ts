import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../models/user.model';
import { UsersService } from '../../object-init/users.service';
import { UserService } from '../../services/user.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-landlord-home',
  templateUrl: './landlord-home.page.html',
  styleUrls: ['./landlord-home.page.scss'],
})
export class LandlordHomePage implements OnInit {

  user: User;
  constructor(
    private router: Router,
    private user_init_svc: UsersService,
    private actRoute: ActivatedRoute,
    private user_svc: UserService) {

    }

  ngOnInit() {
    this.user = this.user_init_svc.defaultUser();
    console.log(this.actRoute.snapshot.params)
    if(this.actRoute.snapshot.params.id){
      this.user.uid = this.actRoute.snapshot.params.id;
      this.user_svc.getUser(this.user.uid)
      .pipe(take(1))
      .subscribe(user_obj =>{
        this.user = user_obj;
        console.log(this.user);
      })
    }
  }

  gotoProfile(){
    this.router.navigate(['/landlord-profile']);
  }

  gotoSearch(){
    this.router.navigate(['/search']);
  }

  gotoSearchFeed(){
  	this.router.navigate(['/search-feed']);
  }

  gotoUploadListing(){
  	this.router.navigate(['/upload-listing' + "/" + `${this.user.uid}`]);
  }

  gotoListings(){
  	this.router.navigate(['/my-listings' + "/" + `${this.user.uid}`]);
  }

  gotoLeases(){
  	this.router.navigate(['/customize-lease' + "/" + `${this.user.uid}`]);
  }

  gotoTracking(){
  	this.router.navigate(['/placement-tracking' + "/" + `${this.user.uid}`]);
  }

  gotoRentTracking(){
    this.router.navigate(['/rent-tracking' + "/" + `${this.user.uid}`]);
  }

}
