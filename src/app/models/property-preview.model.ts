import { Address } from './address.model';

export interface PropertyPreview{
	address: Address;
	parking: boolean;
	wifi: boolean;
	payment_methods: string;
	pool: boolean;
	gym: boolean;
	laundry: boolean;
	tv_room: boolean;
	security: boolean;
	electricity_inclusive_in_rent: boolean;
	property_id: string;
	property_type: string;
	nearby_landmarks: string[];
	deposit_specifics: string[];
	other_amenities: string;
	genders_housed: string; //male only, female only, mixed
}