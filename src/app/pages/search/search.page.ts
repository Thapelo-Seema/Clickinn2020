import { Component, OnInit } from '@angular/core';
import { RoomSearch } from '../../models/room-search.model';
import { RoomSearchService } from '../../object-init/room-search.service';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { UsersService } from '../../object-init/users.service';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { take } from 'rxjs/operators';
import { SearchFeedService } from '../../services/search-feed.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  search: RoomSearch;
  user: User;
  funding: any = "";
  agentMode: boolean = false;
  constructor(public room_init_svc: RoomSearchService, 
    private router: Router,
    private user_init_svc: UsersService,
    private user_svc: UserService,
    private auth_svc: AuthService,
    private sf_svc: SearchFeedService){
      this.user = this.user_init_svc.defaultUser();
      this.search = this.room_init_svc.defaultRoomSearch();
      //Update the current user object
      if(!localStorage.getItem("uid")){
        this.auth_svc.signUpAnonymously()
        .then(data =>{
          this.user.uid = data.user.uid;
          this.search.searcher = this.user;
        })
      }else{
        this.user_svc.getUser(localStorage.getItem("uid"))
        .pipe(take(1))
        .subscribe(user_object =>{
          this.user = user_object;
          this.search.searcher = this.user;
        })
      }
  }

  ngOnInit() {
  }

  nextStep(){
    this.sf_svc.addSearchToFeed(this.search)
    .then(data =>{
      this.router.navigate(['/contact-details'+ '/' + data.id]);
    })
  }

  back(){
  	window.history.back();
  }

}
