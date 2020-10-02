export class Address{
	lat: number;
	lng: number;
	country: string;
	province: string;
	city: string;
	neighbourhood: string;
	house_number: number;
	street: string; 

	constructor(){
		this.lat = 0;
		this.lng = 0;
		this.country = "";
		this.province = "";
		this.city = "";
		this.neighbourhood = "";
		this.house_number = 0;
		this.street = "";
	}
}