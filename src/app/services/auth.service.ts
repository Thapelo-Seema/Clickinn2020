import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth/angular-fire-auth';
import { User } from '../models/user.model';
import { auth } from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  //Function that provides sign up with email and password using firebase auth system
  //returns a firebase UserCredential object on success
  signUpWithEmailAndPassword(email: string, password: string):Promise<any>{
  	return new Promise<any>((resolve, reject) =>{
  		this.afAuth.createUserWithEmailAndPassword(email, password)
	  	.then(data =>{
	  		resolve(data);
	  	})
      .catch(reason =>{
        reject(reason);
      })
  	})
  }

  //Function that lets a user sign up anonymously
  signUpAnonymously():Promise<any>{
    return new Promise<any>((resolve, reject) =>{
      this.afAuth.signInAnonymously()
      .then(data =>{
        resolve(data);
      })
      .catch(reason =>{
        reject(reason);
      })
    })
  }


  signInWithFacebook():Promise<any>{
    return new Promise<any>((resolve, reject) =>{
      this.afAuth.signInWithPopup(new auth.FacebookAuthProvider())
      .then(data =>{
        resolve(data);
      })
      .catch(reason =>{
        reject(reason);
      })
    })
  }

  signInWithTwitter():Promise<any>{
    return new Promise<any>((resolve, reject) =>{
      this.afAuth.signInWithPopup(new auth.TwitterAuthProvider())
      .then(data =>{
        resolve(data);
      })
      .catch(reason =>{
        reject(reason);
      })
    })
  }

  signInWithGoogle():Promise<any>{
    return new Promise<any>((resolve, reject) =>{
      this.afAuth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(data =>{
        resolve(data);
      })
      .catch(reason =>{
        reject(reason);
      })
    })
  }


}
