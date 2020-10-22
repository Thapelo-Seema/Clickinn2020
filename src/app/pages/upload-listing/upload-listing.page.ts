import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user.model';
import { UsersService } from '../../object-init/users.service';
import { PropertiesService } from '../../object-init/properties.service';
import { UserService } from '../../services/user.service';
import { take } from 'rxjs/operators';
import { Property } from '../../models/property.model';
import { Room } from '../../models/room.model';
import { AngularFireStorage } from '@angular/fire/storage';
import { FileUpload } from '../../models/file-upload.model';
import { AuthService } from '../../services/auth.service';

/**
@Todo finish picture uploads for all types of rooms, add cottage to room types,
implement the property and apartment uploads, make the apartment upload a minimalistic
data structure
*/

@Component({
  selector: 'app-upload-listing',
  templateUrl: './upload-listing.page.html',
  styleUrls: ['./upload-listing.page.scss'],
})
export class UploadListingPage implements OnInit {

  //Handles for image input controls
  @ViewChild('backroom_pics') backroom_pics_handle: ElementRef;
  @ViewChild('more_backroom_pics') more_br_pics_handle: ElementRef;
  pageActive: number = 1; //page index tracker
  propertyCaptured: boolean = false; //indicator of property upload completion
  uploadingProperty: boolean = false; //indicatorof property upload in progress
  user: User;
  property: Property;
  house_number_and_street: string;
  nearbys: any;

  //Room types and the quantity of each
  backroom: Room;
  num_backrooms: number = 0;
  single: Room;
  num_singles: number = 0;
  two_sharing: Room;
  num_two_sharings: number = 0;
  three_sharing: Room;
  num_three_sharings: number = 0;
  ensuite: Room;
  num_ensuites: number = 0;
  apartment: Room;
  num_apartments: number = 0

  constructor(
    private actRoute: ActivatedRoute,
    private router: Router,
    private user_init_svc: UsersService,
    private user_svc: UserService,
    private property_init_svc: PropertiesService,
    private afstorage: AngularFireStorage,
    private auth_svc: AuthService){ 
    //initialize user, property and rooms
    this.user = this.user_init_svc.defaultUser();
    this.property = this.property_init_svc.defaultProperty();
    this.backroom = this.property_init_svc.defaultRoom();
    this.single = this.property_init_svc.defaultRoom();
    this.two_sharing = this.property_init_svc.defaultRoom();
    this.three_sharing = this.property_init_svc.defaultRoom();
    this.ensuite = this.property_init_svc.defaultRoom();
    this.apartment = this.property_init_svc.defaultRoom();
  }

  ngOnInit() {
    //get user id from router and update user and property 
    if(this.actRoute.snapshot.params.id){
      this.user.uid = this.actRoute.snapshot.params.id;
      this.user_svc.getUser(this.user.uid)
      .pipe(take(1))
      .subscribe(user_obj =>{
        this.user = user_obj;
        //set id of ulpoader
        this.property.uploader_id = this.user.uid;
        if(this.user.role == "agent"){
          //Add this users id in the agents array
          this.property.agents.push(this.user.uid);
        }else{
          //Add this user as the landlord of this property
          this.property.landlord_id = this.user.uid;
        }
      })
    }
  }

 //Move to the next page
 nextPage(){
   ++this.pageActive;
 }

 //Move to previous page
 prevPage(){
   --this.pageActive;
 }

 //Save and upload the property
 saveAndUpload(){
   
 }


 //-------------------------------Backroom operartions---------------------------------------

 /**Handles deletion of picture from backroom.pictures array and from firebase storage
 given an index of the picture to delete
 @param i index of picture to be deleted from backroom pictures
 @return void
 */
 deleteBackroomPic(i: number){
   let pic = this.backroom.pictures.splice(i, 1);
   const storageRef = this.afstorage.ref(`${pic[0].path}/${pic[0].name}`);
   storageRef.delete()
 }

 /**Handles updating the backroom object when more pictures are added and uploading
 the pictures to firebase storage 
 @param event with files in the target
 @return void
 */
 updateMoreBackroomPics(event){
   let length = this.backroom.pictures.length;
   //map the files object into a files array
   let files = Object.keys(event.target.files).map(ind =>{
     let file = event.target.files[ind];
     return file;
   })
   //Deals with initial upload but does not take into account multiple attempts, where array keeps growing
   files.forEach(fl =>{
     let fileUpload: FileUpload = {
        file: fl,
        path: "ApartmentImages",
        url: "",
        name: fl.name,
        progress: 0
     }
     this.backroom.pictures.push(fileUpload);
   })
   this.uploadBackroomPics(length);
 }

 /**Handles updating the backroom object when initial pictures are added and uploading
 the pictures to firebase storage 
 @param event with files in the target
 @return void
 */
 updateBackroomPics(event){
   //clearing backroom pics before update till I find a better way to update
   
     this.backroom.pictures = [];
   
   //map the files object into a files array
   let files = Object.keys(event.target.files).map(ind =>{
     let file = event.target.files[ind];
     return file;
   })
   //Deals with initial upload but does not take into account multiple attempts, where array keeps growing
   files.forEach(fl =>{
     let fileUpload: FileUpload = {
        file: fl,
        path: "ApartmentImages",
        url: "",
        name: fl.name,
        progress: 0
     }
     this.backroom.pictures.push(fileUpload);
   })
   this.uploadBackroomPics();
 }

 /**Handles button click for selecting initial backroom pics and triggers
 a file input dialog 
 */
 selectBackroomPics(){
   this.backroom_pics_handle.nativeElement.click();
 }

 /**Handles button click for selecting additional backroom pics and triggers
 a file input dialog 
 */
 addMoreBackroomPics(){
   this.more_br_pics_handle.nativeElement.click();
 }

 /**Handles adding the different room types specified by the user
 into the property object (in their specified quantities) 
 */
 addRoomsToProperty(){
   //add apartments to property
   for(let i = 1; i <= this.num_apartments; i++ ){
     let ap = this.apartment;
     ap.room_number = "apartment " + i;  //give room unique room number
     if(this.property.deposit_specifics != "no deposit"){
       ap.deposit = ap.rent;  //deposit initialized to be equal to rent (notify user that they can change this value)
     }
     this.property.rooms.push(ap);
   }

   //add backrooms to property
   for(let i = 1; i <= this.num_backrooms; i++ ){
     let br = this.backroom;
     br.room_number = "backroom " + i;
     if(this.property.deposit_specifics != "no deposit"){
       br.deposit = br.rent;
     }
     this.property.rooms.push(br);
   }

   //add ensuites to property
   for(let i = 1; i <= this.num_ensuites; i++ ){
     let es = this.ensuite;
     es.room_number = "ensuite " + i;
     if(this.property.deposit_specifics != "no deposit"){
       es.deposit = es.rent;
     }
     this.property.rooms.push(es);
   }

   //add singles to property
   for(let i = 1; i <= this.num_singles; i++ ){
     let sgl = this.single;
     sgl.room_number = "single " + i;
     if(this.property.deposit_specifics != "no deposit"){
       sgl.deposit = sgl.rent;
     }
     this.property.rooms.push(sgl);
   }

   //add two sharings to property
   for(let i = 1; i <= this.num_two_sharings; i++ ){
     let two_sh = this.two_sharing;
     two_sh.room_number = "two_sharing " + i;
     if(this.property.deposit_specifics != "no deposit"){
       two_sh.deposit = two_sh.rent;
     }
     this.property.rooms.push(two_sh);
   }

   //add three sharings to property
   for(let i = 1; i <= this.num_three_sharings; i++ ){
     let three_sh = this.three_sharing;
     three_sh.room_number = "three sharing " + i;
     if(this.property.deposit_specifics != "no deposit"){
       three_sh.deposit = three_sh.rent;
     }
     this.property.rooms.push(three_sh);
   }
 }

  /**Handles uploading of the pictures in the backroom.pictures array
  to firebase storage. This method also binds the progress of  each picture
  to the backroom object and updates the picture url in the backroom object.
  @param start_p is the index in the pictures array from which 
  the uploading must begin, if not provided, the upload will start from the 
  very first picture in the array.
  This method is designed for reusability between initial uploading and subsequent
  upload actions, such no one picture is uploaded twice.
  The method also sets the display picture of the backroom
 */
  uploadBackroomPics(start_p?: number){
    for(let i: number = start_p || 0; i < this.backroom.pictures.length; i++){
      const storageRef = this.afstorage.ref(`${this.backroom.pictures[i].path}/${this.backroom.pictures[i].name}`);
      let uploadTask = storageRef.put(this.backroom.pictures[i].file);
      uploadTask.percentageChanges().subscribe(data =>{
        this.backroom.pictures[i].progress = data;
      })
      uploadTask.snapshotChanges().subscribe(data =>{
      },
      err =>{
      },
      () =>{
        storageRef.getDownloadURL()
        .pipe(take(1))
        .subscribe(url =>{
          this.backroom.pictures[i].url = url;
          this.backroom.display_pic_url = url;
        })
      })
    }
  }

  

}
