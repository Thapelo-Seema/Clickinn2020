import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ModalController } from '@ionic/angular';
import { DepositRoomModalPage } from '../../modals/deposit-room-modal/deposit-room-modal.page';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from '../../models/property.model';
import { PropertiesService } from '../../object-init/properties.service';
import { PropertyService } from '../../services/property.service';
import { RoomService } from '../../services/room.service';
import { Room } from '../../models/room.model';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {
	
  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;
  property: Property;
  rooms: Observable<Room[]>

   slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    speed: 3000,
    autoplay: true
  };


  sliderOne: any;

  constructor(
    public modalCtrl: ModalController,
    private property_init_svc: PropertiesService,
    private actRoute: ActivatedRoute,
    private ppty_svc: PropertyService,
    private room_svc: RoomService,
    private router: Router) {
    this.property = this.property_init_svc.defaultProperty();
  	this.sliderOne =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: this.property.pictures
    };

   }

  ngOnInit() {
    if(this.actRoute.snapshot.params.id){
      this.property.property_id = this.actRoute.snapshot.params.id;
      this.ppty_svc.getProperty(this.property.property_id)
      .pipe(take(1))
      .subscribe(data =>{
        console.log(data);
        this.property = data;
      })

      this.rooms = this.room_svc.getPropertyRooms(this.property.property_id);
    }
  }

//show filters
  async filters(){
    const modal = await this.modalCtrl.create({
      component: DepositRoomModalPage,
      cssClass: 'modalClass',
      componentProps: {
        'filterType': 'all'
      }
    });

    return await modal.present();
  }

  //Move to Next slide
  slideNext(object, slideView) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  //Move to previous slide
  slidePrev(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });;
  }

  //Method called when slide is changed by drag or navigation
  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  //Call methods to check if slide is first or last to enable disbale navigation  
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }

}
