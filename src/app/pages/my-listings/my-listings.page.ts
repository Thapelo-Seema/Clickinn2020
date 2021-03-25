import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ListingFilteringPage } from '../../modals/listing-filtering/listing-filtering.page';
import { PropertyService } from '../../services/property.service';
import { Property } from '../../models/property.model';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { UsersService } from '../../object-init/users.service';
import { UserService } from '../../services/user.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-my-listings',
  templateUrl: './my-listings.page.html',
  styleUrls: ['./my-listings.page.scss'],
})
export class MyListingsPage implements OnInit {
 
  properties: Observable<Property[]>;
  user: User;
  constructor(public modalCtrl: ModalController, 
    private router: Router,
    private actRoute: ActivatedRoute,
    private user_init_svc: UsersService,
    private user_svc: UserService,
    private ppty_svc: PropertyService) { 
    this.user = this.user_init_svc.defaultUser();
  }

  ngOnInit() {
    //get user id from router and update user and property 
    if(this.actRoute.snapshot.params.id){
      this.user.uid = this.actRoute.snapshot.params.id;
      this.user_svc.getUser(this.user.uid)
      .pipe(take(1))
      .subscribe(user_obj =>{
        this.user = user_obj;
        this.properties = this.ppty_svc.getUserProperties(this.user.uid)
        this.properties.pipe(take(1))
        .subscribe(ppts =>{
          console.log(ppts);
        })
      })
    }
  }

  gotoHome(){
    this.router.navigate(['/landlord-home']);
  }

  gotoListing(id: string){
    this.router.navigate(['/listing/' +  id]);
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
