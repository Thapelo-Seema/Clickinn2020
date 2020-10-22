import { Injectable, NgZone } from '@angular/core';
import { Router} from '@angular/router';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router, private ngZone: NgZone) { }

  navigateUserToDashboard(user: User){
    this.ngZone.run(() =>{
       if(user.role == "student"){
          this.router.navigate(['/search', {user: user}]);
        }else if(user.role == "caretaker"){
          this.router.navigate(['/landlord-home' + '/' + `${user.uid}`]);
        }else if(user.role == "agent"){
          this.router.navigate(['/landlord-home' + '/' + `${user.uid}`]);
        }else if(user.role == "landlord"){
          this.router.navigate(['/landlord-home' + '/' + `${user.uid}`]);
        }else{
          this.router.navigate(['/tabs/tab1', {user: user}]);
        }
    })
  }

}
