import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomSearch } from '../../models/room-search.model';
import { RoomSearchService } from '../../object-init/room-search.service';
import { User } from '../../models/user.model';
import { UsersService } from '../../object-init/users.service';
import { UserService } from '../../services/user.service';
import { SearchFeedService } from '../../services/search-feed.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.page.html',
  styleUrls: ['./contact-details.page.scss'],
})
export class ContactDetailsPage implements OnInit {

  search: RoomSearch;
  user: User = null;
  names: string = "";

  constructor(
  	private actRoute: ActivatedRoute, 
  	private router: Router, 
  	private room_search_init_svc: RoomSearchService,
  	private user_init_svc: UsersService,
    private user_svc: UserService,
    private sf_svc: SearchFeedService) {
  		this.user = this.user_init_svc.defaultUser();
  		this.search = this.room_search_init_svc.defaultRoomSearch();
  }

  ngOnInit(){
  	if(this.actRoute.snapshot.params.id){
  		this.sf_svc.getSearchById(this.actRoute.snapshot.params.id)
  		.pipe(take(1))
  		.subscribe(sch =>{
  			this.search = sch;
  			this.search.id = this.actRoute.snapshot.params.id;
  			this.user = sch.searcher;
        this.names = this.user.firstname + " " + this.user.lastname;
  			console.log(this.search);
  			console.log(this.user)
  		})
  	}
  }

  back(){
  	window.history.back();
  }

  continueToResults(){
  	let fullnames: string[] = this.names.split(" ");
  	this.user.firstname = fullnames[0] || "Anonymous";
  	this.user.lastname = fullnames[1] || "";
  	this.search.searcher = this.user;
  	console.log(this.search);
  	this.sf_svc.updateSearch(this.search)
  	.then(() =>{
  		this.router.navigate(['/results-scanning' + "/" + this.search.id]);
  	})
  	
  }

}
