import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../models/user.model';
import { auth } from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  //Function that returns a logged in Firebase User
  checkAuthStatus(){
    return this.afAuth.user
  }

  getToken(){
    return !!localStorage.getItem('uid');
  }

  monitorAuthStatus(){
    this.afAuth.onAuthStateChanged(user =>{
       
    })
  }

  //Function that provides sign up with email and password using firebase auth system
  //returns a firebase UserCredential object on success
  signUpWithEmailAndPassword(email: string, password: string):Promise<any>{
  	return new Promise<any>((resolve, reject) =>{
  		this.afAuth.createUserWithEmailAndPassword(email, password)
	  	.then(data =>{
        data.user.sendEmailVerification()
        .then(() =>{
          resolve("Congratulations!, you are almost there, please verify your email before proceeding");
        })
	  		.catch(err =>{
          reject(err);
        })
	  	})
      .catch(reason =>{
        reject(reason.message);
      })
  	})
  }

  signInWithEmailAndPassword(email: string, password: string):Promise<any>{
    return this.afAuth.signInWithEmailAndPassword(email, password)
  }

  //Function that lets a user sign up anonymously
  signUpAnonymously():Promise<any>{
    return this.afAuth.signInAnonymously()
  }


  signInWithFacebook():Promise<any>{
    return this.afAuth.signInWithPopup(new auth.FacebookAuthProvider())
  }

  signInWithTwitter():Promise<any>{
    return this.afAuth.signInWithPopup(new auth.TwitterAuthProvider())

  }

  signInWithGoogle():Promise<any>{
    console.log("running auth service google signin");
    return this.afAuth.signInWithPopup(new auth.GoogleAuthProvider())
  }


}
