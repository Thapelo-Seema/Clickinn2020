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
  checkAuthStatus():Promise<any>{
    return this.afAuth.authState.toPromise();
  }

  //Function that provides sign up with email and password using firebase auth system
  //returns a firebase UserCredential object on success
  signUpWithEmailAndPassword(email: string, password: string):Promise<any>{
  	return new Promise<any>((resolve, reject) =>{
  		this.afAuth.createUserWithEmailAndPassword(email, password)
	  	.then(data =>{
	  		resolve(data.user);
	  	})
      .catch(reason =>{
        reject(reason.message);
      })
  	})
  }

  signInWithEmailAndPassword(email: string, password: string):Promise<any>{
    return new Promise<any>((resolve, reject) =>{
      this.afAuth.signInWithEmailAndPassword(email, password)
      .then(data =>{
        resolve(data.user);
      })
      .catch(reason =>{
        reject(reason.message);
      })
    })
  }

  //Function that lets a user sign up anonymously
  signUpAnonymously():Promise<any>{
    return new Promise<any>((resolve, reject) =>{
      this.afAuth.signInAnonymously()
      .then(data =>{
        resolve(data.user);
      })
      .catch(reason =>{
        reject(reason.message);
      })
    })
  }


  signInWithFacebook():Promise<any>{
    return new Promise<any>((resolve, reject) =>{
      this.afAuth.signInWithPopup(new auth.FacebookAuthProvider())
      .then(data =>{
        resolve(data.user);
      })
      .catch(reason =>{
        reject(reason.message);
      })
    })
  }

  signInWithTwitter():Promise<any>{
    return new Promise<any>((resolve, reject) =>{
      this.afAuth.signInWithPopup(new auth.TwitterAuthProvider())
      .then(data =>{
        resolve(data.user);
      })
      .catch(reason =>{
        reject(reason.message);
      })
    })
  }

  signInWithGoogle():Promise<any>{
    return new Promise<any>((resolve, reject) =>{
      this.afAuth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(data =>{
        resolve(data.user);
      })
      .catch(reason =>{
        reject(reason.message);
      })
    })
  }


}
