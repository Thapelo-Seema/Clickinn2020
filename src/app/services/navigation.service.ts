import { Injectable, NgZone } from '@angular/core';
import { Router} from '@angular/router';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router, private ngZone: NgZone) { }

  navigateUserToDashboard(user: any){
    this.ngZone.run(() =>{
       if(user.role == "student" || user?.user_type == "student"){
          this.router.navigate(['/search', {user: user}]);
        }else if(user.role == "caretaker" || user?.user_type == "caretaker"){
          this.router.navigate(['/landlord-home' + '/' + `${user.uid}`]);
        }else if(user.role == "agent"  || user?.user_type == "agent"){
          this.router.navigate(['/landlord-home' + '/' + `${user.uid}`]);
        }else if(user.role == "landlord" || user?.user_type == "landlord"){
          this.router.navigate(['/landlord-home' + '/' + `${user.uid}`]);
        }else{
          this.router.navigate(['/tabs/tab1', {user: user}]);
        }
    })
  }

  gotoSignUp(){
    this.ngZone.run(() =>{
      this.router.navigate(['/sign-up']);  
    })
  }

}
