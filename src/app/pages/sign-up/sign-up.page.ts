import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSelect } from '@ionic/angular';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { UsersService } from '../../object-init/users.service';
import { NavigationService } from '../../services/navigation.service';
import { take } from 'rxjs/operators';
import { Contract } from '../../models/contract.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  @ViewChild('roleSelect') roleSelect: IonSelect;
  user: User;
  name_and_surname: string = "";
  password: string = "";
  tos_accepted: boolean = false;
  social_sign_in: string = "";
  //private actRoute: ActivatedRoute
  constructor(private user_svc: UserService, 
    private auth_svc: AuthService,
   private user_init: UsersService,
   private nav_svc: NavigationService,
   private afs: AngularFirestore) {
  	
  }

  ngOnInit() {
    this.user = this.user_init.defaultUser();
  }

  //Function that splits the names provided into firstname and lastname
  //triggered by a change in the names input and updates the user object
  updateNames(name_and_surname: string){
    var names = name_and_surname.split(" ");
    this.user.firstname = names[0];
    this.user.lastname = names[1];
  }

  signUpWithEmailAndPassword(){
    this.social_sign_in = "";
    if(this.user.role == ""){
      this.roleSelect.open();
    }
    this.auth_svc.signUpWithEmailAndPassword(this.user.email, this.password)
    .then(firebase_use_obj =>{
      //engage user service to create a user on the database 
      //and navigate user to appropriate page
      this.user.uid = firebase_use_obj.uid;
      this.updateNames(this.name_and_surname);
      this.user.displayName = this.name_and_surname;
      if(this.tos_accepted){ //create and add a tos contract to this users contracts
        let clickinn: User = this.user_init.defaultUser();
        clickinn.firstname = "Clickinn";
        clickinn.lastname = "Student Lifestyle";
        clickinn.role = "Master";
        clickinn.uid = "I_love_Clickinn"
        let tos : Contract = {
          type: "Clickinn Student Lifestyle Terms Of Service",
          agreed_on: new Date(),
          parties: [this.user, clickinn]
        }
        //Contract must be uploaded to contracts collection on db and doc id captured
        this.user.contracts.push(tos);
      }
      this.user_svc.createUser(this.user)
      .then(() =>{
        this.user_svc.getUser(this.user.uid)
        .pipe(take(1))
        .subscribe(user_object =>{
          //navigate user to the appropriate page/dashboard
          //pass the user object as a parameter to the page being navigated to
          this.nav_svc.navigateUserToDashboard(user_object);
        },
        err =>{
          //display useful error message to the user 
          console.log(err.message);
        })
      })
    })
    .catch(err =>{
      console.log(err);
      //display error in friendly way
    })
  }

  signInWithTwitter(){
    this.social_sign_in = "twitter";
    //need to prompt user to select role before moving forward
    if(this.user.role == ""){
      this.roleSelect.open();
    }else{
      this.continueWithAuthAfterRole();
    }
  }

  //This is a function that allows sing in via Facebook, 
  //it's still giving issues about information not transferred in a secure way
  signInWithFacebook(){
    this.social_sign_in = "facebook";
    //need to prompt user to select role before moving forward
    if(this.user.role == ""){
      this.roleSelect.open();
    }else{
      this.continueWithAuthAfterRole();
    }
  }

  //This function allows sign in with Google account
  signInWithGoogle(){
    this.social_sign_in = "google";
    //need to prompt user to select role before moving forward
    if(this.user.role == ""){
      this.roleSelect.open() //selects role and continues with authentication
      this.roleSelect.ionChange.pipe(take(1))
      .subscribe(() =>{
        this.auth_svc.signInWithGoogle()
        .then(firebase_use_obj =>{
          this.createUserAndNavigate(firebase_use_obj);
        })
        .catch(err =>{
          console.log(err);
        })
      })
    }else{
      this.auth_svc.signInWithGoogle()
      .then(firebase_use_obj =>{
        this.createUserAndNavigate(firebase_use_obj);
      })
      .catch(err =>{
        console.log(err);
      })
    }
  }

  //This function takes a FirebaseUser object as a parameter and creates 
  //User object for the database. The function creates a terms of service contract,
  //updates the user fields using the FirebaseUser object, then commits the user object
  //to the database and navigates the user to the relevant dashboard (with nav params)
  createUserAndNavigate(firebase_use_obj: any){
    this.user.displayName = firebase_use_obj.additionalUserInfo.profile.name;
    this.updateNames(this.user.displayName);
    this.user.email = firebase_use_obj.user.email;
    this.user.phoneNumber = firebase_use_obj.user.phoneNumber;
    this.user.photoURL = firebase_use_obj.user.photoURL;
    this.user.uid = firebase_use_obj.user.uid;
    if(this.tos_accepted){ //create and add a tos contract to this users contracts
      this.generateTermsContract();
    }
    console.log(this.user);
    console.log(firebase_use_obj);
    this.nav_svc.navigateUserToDashboard(this.user);
    /*this.afs.collection("Users").doc(firebase_use_obj.user.uid).set(this.user)
    .then(() =>{
      console.log("User created !")
      this.user_svc.getUser(this.user.uid)
      .pipe(take(1))
      .subscribe(user_object =>{
        //navigate user to the appropriate page/dashboard
        //pass the user object as a parameter to the page being navigated to
        console.log(user_object);
        this.nav_svc.navigateUserToDashboard(user_object);
      },
      err =>{
        //display useful error message to the user 
        console.log(err.message);
      })
    })
    .catch(err =>{
      console.log(err);
    })*/
  }

  generateTermsContract(){
    let clickinn: User = this.user_init.defaultUser();
    clickinn.firstname = "Clickinn";
    clickinn.lastname = "StudentLifestyle";
    clickinn.role = "Master";
    clickinn.uid = "I_love_Clickinn"
    let tos : Contract = {
      type: "Clickinn Student Lifestyle Terms Of Service",
      agreed_on: new Date(),
      parties: [this.user, clickinn]
    }
    this.user.contracts.push(tos);
  }

  //This function is called everytime the role is changed
  //based where the change is initiated, it will run the appropriate
  //authentication method and call createUserAndNavigate()
  continueWithAuthAfterRole(){
    console.log("continueWithAuthAfterRole")
    if(this.social_sign_in == ""){
    }else if(this.social_sign_in == "google"){
      this.auth_svc.signInWithGoogle()
      .then(firebase_use_obj =>{
        //engage user service to create a user on the database 
        //and navigate user to appropriate page
        this.createUserAndNavigate(firebase_use_obj);
      })
      .catch(err =>{
        console.log(err);
        //display error in friendly way
      })
    }else if(this.social_sign_in == "facebook"){
      this.auth_svc.signInWithFacebook()
      .then(firebase_use_obj =>{
        //engage user service to create a user on the database 
        //and navigate user to appropriate page
        this.createUserAndNavigate(firebase_use_obj);
      })
      .catch(err =>{
        console.log(err);
        //display error in friendly way
      })
    }else if(this.social_sign_in == "twitter"){
      this.auth_svc.signInWithTwitter()
      .then(firebase_use_obj =>{
        //engage user service to create a user on the database 
        //and navigate user to appropriate page
        this.createUserAndNavigate(firebase_use_obj);
      })
      .catch(err =>{
        console.log(err);
        //display error in friendly way
      })
    }
  }

}
