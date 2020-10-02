import { Tenant } from './tenant.model';
import { Property } from './property.model';
import { User } from './user.model';

export interface Room{
	available: boolean;
	display_pic_url: string;
	pictures: string[];
	video_url: string;
	room_id: string;
	occupants: Tenant[];
	property: Property;
	furnished: boolean;
	room_type: string;
	search_rating: number;
	demand_index: number;
	rent: number;
	number_of_similar_rooms: number;
	call_number: string;
	uploader: User;
}