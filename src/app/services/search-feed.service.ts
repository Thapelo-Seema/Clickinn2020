import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { RoomSearch } from '../models/room-search.model';

@Injectable({
  providedIn: 'root'
})
export class SearchFeedService {

  search_end_point: string = "https://us-central1-clickinn-996f0.cloudfunctions.net/searchPlace";
  
  constructor(private afs: AngularFirestore) { }

  addSearchToFeed(search: RoomSearch){
  	return this.afs.collection<RoomSearch>('Searchfeed').add(search);
  }

  updateSearch(search: RoomSearch){
  	return this.afs.collection('Searchfeed').doc<RoomSearch>(search.id).update(search);
  }

  getSearchById(id: string){
  	return this.afs.collection('Searchfeed').doc<RoomSearch>(id).valueChanges();
  }
  
}
