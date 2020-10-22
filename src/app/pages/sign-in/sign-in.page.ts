import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { UsersService } from '../../object-init/users.service';
import { NavigationService } from '../../services/navigation.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  password: string = "";
  email: string = "";
  social_sign_in: string = "";
  constructor(private user_svc: UserService, 
    private auth_svc: AuthService,
   private user_init: UsersService,
   private nav_svc: NavigationService) { }

  ngOnInit() {
 
  }

  signInWithEmailAndPassword(){
  	this.social_sign_in = "";
  	this.auth_svc.signInWithEmailAndPassword(this.email, this.password)
  	.then(firebase_user =>{
  		this.getUserAndNavigate(firebase_user);
  	})
  	.catch(err =>{
  		console.log(err);
  	})
  }

  signInWithTwitter(){
  	this.social_sign_in = "twitter";
  	this.auth_svc.signInWithTwitter()
  	.then(firebase_user =>{
  		this.getUserAndNavigate(firebase_user);
  	})
  }

  signInWithFacebook(){
  	this.social_sign_in = "facebook";
  	this.auth_svc.signInWithFacebook()
  	.then(firebase_user =>{
  		this.getUserAndNavigate(firebase_user);
  	})
  	.catch(err =>{
  		console.log(err);
  	})
  }

  signInWithGoogle(){
  	this.social_sign_in = "google";
  	this.auth_svc.signInWithGoogle()
  	.then(firebase_user =>{
  		this.getUserAndNavigate(firebase_user);
  	})
  	.catch(err =>{
  		console.log(err);
  	})
  }

  getUserAndNavigate(firebase_user: any){
  	this.user_svc.getUser(firebase_user.uid)
	.pipe(take(1))
	.subscribe(user_object =>{
		//navigate user to the appropriate page/dashboard
		//pass the user object as a parameter to the page being navigated to
		this.nav_svc.navigateUserToDashboard(user_object);
		},
		err =>{
			console.log(err);
	})
  }

}
