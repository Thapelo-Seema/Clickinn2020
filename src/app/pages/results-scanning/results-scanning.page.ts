import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ScannerPopupPage } from '../../modals/scanner-popup/scanner-popup.page';
import { MapsService } from '../../services/maps.service';
import { SearchFeedService } from '../../services/search-feed.service';
import { take } from 'rxjs/operators';
import { RoomSearch } from '../../models/room-search.model';
import { RoomSearchService } from '../../object-init/room-search.service';
import { MarkerOptions } from '../../models/marker-options.model';
import { RoomService } from '../../services/room.service';

declare var google: any;

@Component({
  selector: 'app-results-scanning',
  templateUrl: './results-scanning.page.html',
  styleUrls: ['./results-scanning.page.scss'],
})
export class ResultsScanningPage implements OnInit {

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;
  map: any;
  search: RoomSearch;
  scanning_done: boolean = false;
  constructor(
    public modalCtrl: ModalController, 
    public maps_svc: MapsService,
    private actRoute: ActivatedRoute, 
    private router: Router, 
    private sf_svc: SearchFeedService,
    private room_search_init_svc: RoomSearchService,
    private room_svc: RoomService ) {
    this.search = this.room_search_init_svc.defaultRoomSearch();
  }

  ngOnInit() {
    if(this.actRoute.snapshot.params.id){
      this.sf_svc.getSearchById(this.actRoute.snapshot.params.id)
      .pipe(take(1))
      .subscribe(sch =>{
        this.search = sch;
        this.maps_svc.geoGoder(this.search.institution_and_campus)
        .then(results =>{
          console.log(results);
          this.search.institution_address = results;
          this.showMap();
          //launch search
          this.room_svc.getRoomSearchResults(this.search)
          .pipe(take(1))
          .subscribe(data =>{
            this.scanning_done = true;
            this.filters(data, this.search);
          })
        })
      })
    }
  }

  ionViewDidEnter(){
  	//this.showMap();
  }

  back(){
  	window.history.back();
  }

  showMap(){
   	const location = new google.maps.LatLng(this.search.institution_address.lat, 
       this.search.institution_address.lng);
   	const options = {
   		center: location,
   		zoom: 14,
   		disableDefaultUI: true
   	}
   	this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    let moptions: MarkerOptions = {
      position: {lat: this.search.institution_address.lat, lng: this.search.institution_address.lng},
      map: this.map
    }
    this.maps_svc.addMarker(moptions);
  }

  async filters(data: any[], search: RoomSearch){
  	const modal = await this.modalCtrl.create({
  		component: ScannerPopupPage,
      cssClass: 'modalClass',
  		componentProps: {
  			'filterType': 'all',
        'results_scanned': Math.floor(data.length*(Math.random()*5 + 10)), //random multiplier (10-15)
        'results_matched': data.length,
        'search_institution': search.institution_and_campus || "" + " " + 
        search.institution_address.neighbourhood,
        'search_id': this.search.id
  		}
  	});
  	return await modal.present();
  }

}
