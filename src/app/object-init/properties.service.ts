import { Injectable } from '@angular/core';
import { Property } from '../models/property.model';
import { Address } from '../models/address.model';
import { Room } from '../models/room.model';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  constructor() { }

  defaultAddress(): Address{
  	let address: Address ={
  		lat: 0,
  		lng: 0,
  		country: "",
  		province: "",
  		city: "",
  		neighbourhood: "",
  		street: "",
  		house_number: ""
  	}
  	return address
  }

  defaultRoom(): Room{
  	let room: Room = {
  		available: false,
		display_pic_url: "",
		pictures: [],
		video_url: "",
		room_id: "",
		occupants: [],
		furnished: false,
		room_type: "",
		search_rating: 0,  
		demand_index: 0,   
		rent: 0,
		deposit: 0,
		room_number: ""
  	}
  	return room;
  }

  initializedRoom(type: string,  rm_number: string, is_furnished?: boolean){
  	let room: Room = {
  		available: true,
		display_pic_url: "",
		pictures: [],
		video_url: "",
		room_id: "",
		occupants: [],
		furnished: is_furnished || false,
		room_type: type,
		search_rating: 0,  
		demand_index: 0,   
		rent: 0,
		deposit: 0,
		room_number: rm_number
  	}
  	return room;
  }

  defaultProperty():Property{
  	let property: Property = {
  		address: this.defaultAddress(),
		parking: false,
		wifi: false,
		accredited: false,
		pool: false,
		gym: false,
		laundry: false,
		tv_room: false,
		security: false,
		electricity_inclusive_in_rent: false,
		landlord_id: "",
		agents: [],
		property_id: "",
		service_package: "",
		display_pic_url: "",
		pictures: [],
		video_url: "",
		property_type: "",
		property_paid_off: false,
		nearby_landmarks: [],
		minutes_from_campus: 0,
		upload_complete: 0,
		uploader_id: "",
		deposit_specifics: "",
		uploader_contact_number: "",
		other_amenities: "",
		rooms: []
  	}
  	return property;
  }
}
