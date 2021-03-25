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
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {
  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;
  
  room: Room;

   slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    speed: 3000,
    autoplay: true
  };

  sliderOne: any;

  constructor(public modalCtrl: ModalController,
    private property_init_svc: PropertiesService,
    private actRoute: ActivatedRoute,
    private room_svc: RoomService,
    private router: Router) {
  		this.room = this.property_init_svc.defaultRoom();
	  	this.sliderOne =
	    {
	      isBeginningSlide: true,
	      isEndSlide: false,
	      slidesItems: this.room.pictures
	    };

    }

  ngOnInit() {
  	if(this.actRoute.snapshot.params.id){
      this.room.room_id = this.actRoute.snapshot.params.id;
      this.room_svc.getRoom(this.room.room_id)
      .pipe(take(1))
      .subscribe(data =>{
        console.log(data);
        this.room = data;
      })
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
