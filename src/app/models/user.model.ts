import { Landlord } from './landlord.model';
import { Tenant } from './tenant.model';

export interface User{
	balance?: number;
	contracts?: any[];
	displayName?: string; 
	dob?: Date;
	email: string;
	firstname: string;
	fcm_token?: string[];
	firstime?: boolean;
	gender?: string;
	is_host: boolean;
	id_no?: string;
	landlord_profile?: Landlord;
	lastname: string;
	liked_apartments?: string[];
	occupation?: string;
	phoneNumber?: string;
	photoURL?: string;
	rating?: string;
	status?: boolean;
	tenant_profile?: Tenant;
	user_type: string;
	role?: string;
	//threads?: any; no longer in use
	uid: string;	
}