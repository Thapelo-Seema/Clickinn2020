import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchFeedService } from '../../services/search-feed.service';
import { take } from 'rxjs/operators';
import { RoomSearch } from '../../models/room-search.model';
import { MapsService } from '../../services/maps.service';
import { RoomSearchService } from '../../object-init/room-search.service';
import { RoomService } from '../../services/room.service';
import { Room } from '../../models/room.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {
  search: RoomSearch;
  rooms: Room[] = [];
  constructor(private actRoute: ActivatedRoute, 
    private router: Router,
    private sf_svc: SearchFeedService,
    private room_search_init_svc: RoomSearchService,
    private room_svc: RoomService,
    public maps_svc: MapsService) {
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
          
          //launch search
          this.room_svc.getRoomSearchResults(this.search)
          .pipe(take(1))
          .subscribe(data =>{
            console.log(data);
            this.rooms = data;
          })
        })
      })
    }
  }

  updateDp(i){
  	this.rooms[i].dp_loaded = true;
  }

  gotoResult(id: string){
  	this.router.navigate(['/result' + '/' + id]);
  }

}
