import { Address } from './address.model';

export interface Property{
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
	
}