import { Address } from './address.model';

export class Property{
	address: Address;
	parking: boolean;
	wifi: boolean;
	accredited: boolean;
	pool: boolean;
	gym: boolean;
	laundry: boolean;
	tv_room: boolean;
	security: boolean;
	electricity_inclusive_in_rent: boolean;
	landlord_id: string;
	agents: string[];
	property_id: string;
	service_package: string;
	display_pic_url: string;
	pictures: string[];
	video_url: string;
	property_type: string;
	property_paid_off: boolean;
	nearby_landmarks: string[];
	minutes_from_campus: number;
	upload_complete: boolean;

	constructor(){
		this.address = new Address();
		this.parking = false;
		this.wifi = false;
		this.accredited = false;
		this.pool = false;
		this.gym = false;
		this.laundry = false;
		this.tv_room = false;
		this.security = false;
		this.electricity_inclusive_in_rent = false;
		this.landlord_id = "";
		this.agents = [];
		this.property_id = "";
		this.service_package = "";
		this.display_pic_url = "";
		this.pictures = [];
		this.video_url = "";
		this.property_type = "";
		this.property_paid_off = false;
		this.nearby_landmarks = [];
		this.minutes_from_campus = 0;
		this.upload_complete = false;
	}

	addAgent(){

	}

	removeAgent(){

	}

	addLandLord(){

	}	
}