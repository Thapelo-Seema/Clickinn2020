import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { UsersService } from '../../object-init/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  user: User;
  name_and_surname: string = "";
  password: string = "";
  tos_accepted: boolean = false;
  //private actRoute: ActivatedRoute
  constructor(private user_svc: UserService, private auth_svc: AuthService,
   private user_init: UsersService) {
  	this.user = this.user_init.defaultUser();
  }

  ngOnInit() {
  }

  signUpWithEmailAndPassword(){
    this.auth_svc.signUpWithEmailAndPassword(this.user.email, this.password)
    .then(data =>{
      //engage user service to create a user on the database 
      //and navigate user to appropriate page
      console.log(data);
    })
    .catch(err =>{
      console.log(err);
      //display error in friendly way
    })
  }

  signInWithTwitter(){
    this.auth_svc.signInWithTwitter()
    .then(data =>{
      //engage user service to create a user on the database 
      //and navigate user to appropriate page
      console.log(data);
    })
    .catch(err =>{
      console.log(err);
      //display error in friendly way
    })
  }

  signInWithFacebook(){
    this.auth_svc.signInWithFacebook()
    .then(data =>{
      //engage user service to create a user on the database 
      //and navigate user to appropriate page
      console.log(data);
    })
    .catch(err =>{
      console.log(err);
      //display error in friendly way
    })
  }

  signInWithGoogle(){
    this.auth_svc.signInWithGoogle()
    .then(data =>{
      //engage user service to create a user on the database 
      //and navigate user to appropriate page
      console.log(data);
    })
    .catch(err =>{
      console.log(err);
      //display error in friendly way
    })
  }

}
