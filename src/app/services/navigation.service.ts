import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) { }

  navigateUserToDashboard(user: User){
  	if(user.role == "student"){
  		this.router.navigate(['/search', {user: user}]);
  	}else if(user.role == "caretaker"){
  		this.router.navigate(['/management-admin', {user: user}]);
  	}else if(user.role == "agent"){
  		this.router.navigate(['/agent-admin', {user: user}]);
  	}else if(user.role == "landlord"){
  		this.router.navigate(['/landlord-home', {user: user}]);
  	}else{
  		this.router.navigate(['/tabs/tab1', {user: user}]);
  	}
  }

}
