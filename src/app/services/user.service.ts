import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

//A service that takes care of CRUD operations on the User collection

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afs: AngularFirestore) { }

    //Function that creates a new user in the User collection
    //usually called after a sign up
    //takes a user object as a parameter and returns a void promise on completion 
  	createUser(user: User):Promise<void>{
  		return this.afs.collection('Users').doc(user.uid).set(user);
  	}

    //Function that updates the details of a particular user
    //Takes a user object as a parameter and returns a void promise on completion
  	updateUser(user: User):Promise<void>{
  		return this.afs.collection('Users').doc(user.uid).set(user);
  	}

    //Function for retrieving a user object
    //Takes the user id (uid) as a parameter and returns a User Observable
  	getUser(uid: string):Observable<User>{
  		return this.afs.collection('Users').doc<User>(uid).valueChanges();
  	}
}
