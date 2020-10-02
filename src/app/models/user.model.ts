//import { Landlord } from './landlord.model';
//import { Tenant } from './tenant.model';

export class User{
	balance: number;
	contracts: any[];
	displayName: string; 
	dob: Date;
	email: string;
	firstname: string;
	fcm_tokens: string[];
	firstime: boolean;
	gender: string;
	//is_host: boolean; 					//'host' is used in previous version (replaced by 'role')
	id_no: string;
	is_on_WhatsApp: boolean;     	 	//indication of whether the contact number is on WhatsApp
	lastname: string;
	liked_apartments: string[];
	occupation: string;
	phoneNumber: string;
	photoURL: string;
	rating: number;
	online: boolean;
	//user_type: string;
	role: string;
	//threads?: any; no longer in use
	uid: string;

	constructor();
	constructor(obj?: any){
		this.balance = obj && obj.balance || 0;
		if(obj && obj.contracts){
			for(let i: number = 0; i < obj.contracts.length; i++){
				this.contracts.push(obj.contracts[i]);
			}
		}else{
			this.contracts = [];
		}
		if(obj && obj.liked_apartments){
			for(let i: number = 0; i < obj.liked_apartments.length; i++){
				this.liked_apartments.push(obj.liked_apartments[i]);
			}
		}else{
			this.liked_apartments = [];
		}
		if(obj){
			if(obj.fcm_tokens){
				for(let i: number = 0; i < obj.fcm_tokens.length; i++){
					this.fcm_tokens.push(obj.fcm_tokens[i]);
				}
			}
			if(obj.fcm_token){
				this.fcm_tokens.push(obj.fcm_token);
			}
		}else{
			this.fcm_tokens = [];
		}
		this.displayName = obj && obj.displayName || "";
		this.dob = obj && obj.dob || null;
		this.email = obj && obj.email || "";
		this.firstname = obj && obj.firstname || "";
		this.firstime = obj && obj.firstime || false;
		this.gender = obj && obj.gender || "";
		this.id_no = obj && obj.id_no || "";
		this.is_on_WhatsApp = obj && obj.is_on_WhatsApp || false;
		this.lastname = obj && obj.lastname || "";
		this.occupation = obj && obj.occupation || "";
		this.phoneNumber = obj && obj.phoneNumber || "";
		this.photoURL = obj && obj.photoURL || "";
		this.rating = obj && obj.rating || 0;
		this.online = obj && obj.online || false;
		this.role = obj && obj.role || "visitor";
		this.uid = obj && obj.uid || "";
	}

}