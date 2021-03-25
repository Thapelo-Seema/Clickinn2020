export interface AccommodationSearch{
	room_type: string;
	institution_and_campus: string;
	max_price: number;
	funding_type: string;
	parking_needed: boolean;
	special_needs: string;
	public_search: boolean;
	id: string;
	searcher_id: string;
	searcher_name: string;
	searcher_email: string;
	searcher_phone_number: string;
	is_on_WhatsApp: boolean;
	gender_prefference: string;  //male-only, female only or mixed
	preffered_property_type: string  //flats and apartment style, house and commune style
}