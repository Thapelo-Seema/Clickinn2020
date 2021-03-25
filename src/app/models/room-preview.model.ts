import { PropertyPreview } from './property-preview.model';

export interface RoomPreview{
	available: boolean;
	room_id: string;
	furnished: boolean;
	room_type: string;
	search_rating: number; //calculated per individual search
	demand_index: number; //aggregated over all searches
	rent: number;
	deposit: number;
	property: PropertyPreview;
}