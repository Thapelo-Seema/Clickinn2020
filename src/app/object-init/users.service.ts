import { Injectable } from '@angular/core';
import { User } from '../models/user.model'; 

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  defaultUser():User{
  	let user:User = {
  		account_balance: 0,
  		contracts: [],
  		displayName: "",
  		dob: new Date(),
  		email: "",
  		firstname: "",
  		fcm_tokens: [],
  		firstime: true,
  		gender:"",
  		id_no: "",
  		is_on_WhatsApp: false,
  		lastname: "",
  		liked_apartments: [],
  		occupation: "",
  		phoneNumber: "",
  		photoURL: "",
  		rating: 0,
  		online: false,
  		role: "",
  		uid: ""
  	}
  	return user;
  }

  CopyUser(originalUser: User):User
  {
  	let user:User = {
  		account_balance: originalUser.account_balance || 0,
  		contracts: originalUser.contracts || [],
  		displayName: originalUser.displayName || "",
  		dob: originalUser.dob || new Date(),
  		email: originalUser.email || "",
  		firstname: originalUser.firstname || "",
  		fcm_tokens: originalUser.fcm_tokens || [],
  		firstime: originalUser.firstime || true,
  		gender:originalUser.gender || "",
  		id_no: originalUser.id_no || "",
  		is_on_WhatsApp: originalUser.is_on_WhatsApp || false,
  		lastname: originalUser.lastname || "",
  		liked_apartments: originalUser.liked_apartments || [],
  		occupation: originalUser.occupation || "",
  		phoneNumber: originalUser.phoneNumber || "",
  		photoURL: originalUser.photoURL || "",
  		rating: originalUser.rating || 0,
  		online: originalUser.online || false,
  		role: originalUser.role || "",
  		uid: originalUser.uid || ""
  	}
  	return user;
  }
}
