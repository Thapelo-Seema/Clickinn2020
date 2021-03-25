import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from "@angular/router";
import { AuthService } from './auth.service';

//import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router: Router, private auth_svc: AuthService) { }
  //activates routing if a user id is found in the localStorage, meaning that someone logged in
  canActivate(route: ActivatedRouteSnapshot): boolean{
    let user_logged_in: boolean = this.auth_svc.getToken();
    if(!user_logged_in){
      this.router.navigate(['/sign-in']);
    }
    console.log("Authorized: ", user_logged_in);
    return user_logged_in;
  }
}
