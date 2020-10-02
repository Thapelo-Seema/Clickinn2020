import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afs: AngularFirestore) { }

  	createUser(user: User):Promise<any>{
  		return this.afs.collection('Users').add(user)
  	}

  	updateUser(user: User):Promise<void>{
  		return this.afs.collection('Users').doc(user.uid).set(user);
  	}

  	getUser(uid: string):Observable<any>{
  		return this.afs.collection('Users').doc(uid).get();
  	}
}
