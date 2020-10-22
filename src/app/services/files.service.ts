import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FileUpload } from '../models/file-upload.model';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(private afstorage: AngularFireStorage) { }

  uploadPic(pic: FileUpload){
  	const storageRef = this.afstorage.ref(`${pic.path}/${pic.name}`);
  	let uploadTask = storageRef.put(pic.file);
  	uploadTask.percentageChanges().subscribe(data =>{
  		console.log(data);
  	})
  	uploadTask.snapshotChanges().subscribe(data =>{
  	},
  	err =>{
  	},
  	() =>{
  		storageRef.getDownloadURL()
  		.pipe(take(1))
  		.subscribe(url =>{

  		})
  	})
  }
}
