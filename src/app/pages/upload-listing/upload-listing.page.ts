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
import { PropertyService } from '../../services/property.service';
import { RoomService } from '../../services/room.service';
import { ModalController } from '@ionic/angular';
import { LocationGraphService } from '../../services/location-graph.service';
import { ToastController } from '@ionic/angular';
import { UploadSuccessPage } from '../../modals/upload-success/upload-success.page';
import { MapsService } from '../../services/maps.service';

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
  @ViewChild('single_room_pics') single_room_pics_handle: ElementRef;
  @ViewChild('more_single_room_pics') more_sr_pics_handle: ElementRef;
  @ViewChild('two_sharing_room_pics') two_sharing_room_pics_handle: ElementRef;
  @ViewChild('more_two_single_room_pics') more_two_sh_pics_handle: ElementRef;
  @ViewChild('three_sharing_room_pics') three_sharing_room_pics_handle: ElementRef;
  @ViewChild('more_three_single_room_pics') more_three_sh_pics_handle: ElementRef;
  @ViewChild('ensuite_pics') ensuite_pics_handle: ElementRef;
  @ViewChild('more_ensuite_pics') more_ensuite_pics_handle: ElementRef;
  @ViewChild('apartment_pics') apartment_pics_handle: ElementRef;
  @ViewChild('more_apartment_pics') more_apartment_pics_handle: ElementRef;
  @ViewChild('shared_area_pics') shared_area_pics_handle: ElementRef;
  @ViewChild('more_shared_area_pics') more_shared_area_pics_handle: ElementRef;
  pageActive: number = 1; //page index tracker
  propertyCaptured: boolean = false; //indicator of property upload completion
  uploadingProperty: boolean = false; //indicatorof property upload in progress
  user: User;    //current user performing upload
  property: Property;    //model of current property being uploaded
  provinces: string[] = [];    //array of provinces to choose from
  cities: string[] = [];    //array of cities to choose from based on province selected
  neighbourhoods: string[] = []; //array of areas to choose from based on city selected
  campuses: string[] = []; //array of landmarks to choose from based on selected area
  apartments: Room[] = []; //array of apartments in the property
  house_number_and_street: string = ""; // to be used as input text for predictions
  showUploadProgressBar: boolean = false;

  //variables for autocomplete
  predictionLoading: boolean = false;
  predictions: any[] = [];
  nearbys: string[] = [];

  //Room types
  backroom: Room;
  single: Room;
  two_sharing: Room;
  three_sharing: Room;
  ensuite: Room;
  apartment: Room;

  uploadProgressPercentage: number = 0;

  constructor(
    private actRoute: ActivatedRoute,
    private router: Router,
    private user_init_svc: UsersService,
    private user_svc: UserService,
    private property_init_svc: PropertiesService,
    private afstorage: AngularFireStorage,
    private auth_svc: AuthService,
    private location_graph: LocationGraphService,
    private ppty_svc: PropertyService,
    private room_svc: RoomService,
    public modalCtrl: ModalController,
    public toastController: ToastController,
    public maps_svc: MapsService){ 
    //initialize user, property and rooms
    this.user = this.user_init_svc.defaultUser();
    this.property = this.property_init_svc.defaultProperty();
    this.backroom = this.property_init_svc.defaultRoom();
    this.backroom.room_type = "Backroom";
    this.single = this.property_init_svc.defaultRoom();
    this.single.room_type = "Single Room";
    this.two_sharing = this.property_init_svc.defaultRoom();
    this.two_sharing.room_type = "Two Sharing Room";
    this.three_sharing = this.property_init_svc.defaultRoom();
    this.three_sharing.room_type = "Three Sharing Room";
    this.ensuite = this.property_init_svc.defaultRoom();
    this.ensuite.room_type = "Ensuite";
    this.apartment = this.property_init_svc.defaultRoom();
    this.apartment.room_type = "Apartment";
  }

  ngOnInit(){
    //get user id from router and update user and property 
    if(this.actRoute.snapshot.params.id){
      this.user.uid = this.actRoute.snapshot.params.id;
      this.user_svc.getUser(this.user.uid)
      .pipe(take(1))
      .subscribe(user_obj =>{
        this.user = user_obj;
        //set id of ulpoader
        this.property.uploader_id = this.user.uid;
        this.property.uploader_contact_number = this.user.phoneNumber;
        //determine whether user is agent or landlord and update ownership details in property
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

  /*Getting autocomplete predictions from the google maps place predictions service*/
  getPredictions(event){
    this.predictionLoading = true;
    if(event.key === "Backspace" || event.code === "Backspace"){
      setTimeout(()=>{//Set timeout to limit the number of requests made during a deletion
        this.maps_svc.getPlacePredictionsSA(event.target.value).then(data =>{
          this.handleSuccess(data);
        })
        .catch(err =>{
          console.log(err)
        })
      }, 3000)
    }else{// When location is being typed
      this.maps_svc.getPlacePredictionsSA(event.target.value).then(data =>{
        if(data == null || data == undefined ){
          console.log("No predictions returned");
        }else{
          this.handleSuccess(data);
        }
      })
      .catch(err => {
        console.log(err)
      })
    }
  }

  cancelSearch(){
    this.predictions = [];
    this.predictionLoading = false;
  }

  selectPlace(place){
    this.predictionLoading = true;
    this.maps_svc.getSelectedPlace(place).then(data => {
      this.property.address = data;
      this.predictions = [];
      this.nearbys = this.location_graph.generateCampusSuggestion(data.neighbourhood);
      this.predictionLoading = false;
    })
    .catch(err => {
      console.log(err);
      this.predictionLoading = false;
    })
  }

  handleSuccess(data: any[]){
    this.predictions = []; //clear predictions before loading new data
    this.predictions = data;
    this.predictionLoading = false; //indicate once predictions loaded
  }

  updateBackroomPicsLoaded(i: number){
    this.backroom.pictures[i].loaded = true;
  }

  updateSinglePicsLoaded(i: number){
    this.single.pictures[i].loaded = true;
  }

  updateTwoSharingPicsLoaded(i: number){
    this.two_sharing.pictures[i].loaded = true;
  }

  updateThreeSharingPicsLoaded(i: number){
    this.three_sharing.pictures[i].loaded = true;
  }

  updateEnsuitePicsLoaded(i: number){
    this.ensuite.pictures[i].loaded = true;
  }

  updateApartmentPicsLoaded(i: number){
    this.apartment.pictures[i].loaded = true;
  }

  updateSharedAreaPicsLoaded(i: number){
    this.property.shared_area_pics[i].loaded = true;
  }

  updatePropertyPicsLoaded(i: number){
    this.property.pictures[i].loaded = true;
  }

  //show filters
  async uploadSuccess(){
    const modal = await this.modalCtrl.create({
      component: UploadSuccessPage,
      cssClass: 'modalClass',
      componentProps: {
        'property_id': this.property.property_id
      }
    });

    return await modal.present();
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  updatePropertyInRooms(){
    this.backroom.property = this.property;
    this.single.property = this.property;
    this.two_sharing.property = this.property;
    this.three_sharing.property = this.property;
    this.ensuite.property = this.property;
    this.apartment.property = this.property;
  }

 //Move to the next page
 nextPage(){
   ++this.pageActive;
   if(this.pageActive == 2){
     this.saveProperty();
   }else if(this.pageActive == 4){
     this.updatePropertyDetails();
     this.addRoomsToProperty();
   }
 }

 //Move to previous page
 prevPage(){
   --this.pageActive;
 }

 saveProperty(){
   if(this.property.accredited){
     this.property.payment_methods = "NSFAS, Bursary and Cash";
   }else{
     this.property.payment_methods = "Direct Paying Bursary and Cash";
   }
   this.ppty_svc.createProperty(this.property)
   .then(data =>{
     this.property.property_id = data.id;
     this.updatePropertyInRooms();
     this.presentToast("Property saved!");
   })
   .catch(err =>{
     console.log(err);
   })
 }

 updatePropertyDetails(){
   this.ppty_svc.updateProperty(this.property)
   .then(() =>{
     this.updatePropertyInRooms();
     this.presentToast("Property saved!");
   })
   .catch(err =>{
     console.log(err);
   })
 }

 generateRoomDescription(room: Room):string{
   let description: string = "";
   description += room.furnished ? "Fully furnished " : "" + room.room_type;

   if(room.property.nearby_landmarks.length > 0) description += " near ";
   for(let i = 0; i < room.property.nearby_landmarks.length; i++){
      description += room.property.nearby_landmarks[i] + 
      (i == room.property.nearby_landmarks.length - 1) ? "." : ", "
   }
   return description;
 }

//Save and upload the property
async saveAndUpload(){
  let updatedCount: number = 0;
  this.showUploadProgressBar = true;
  this.ppty_svc.updateProperty(this.property) //update property details
  .then(() =>{
    console.log("final property saved!")
  })
  .catch(err =>{
    console.log("error in saveAndUpload()")
    console.log(err);
  })

  console.log("Uploading rooms...");
  console.log(this.apartments);
  for(let i: number = 0; i < this.apartments.length; i++){ //update rooms
    this.apartments[i].description = this.generateRoomDescription(this.apartments[i]);
    await this.room_svc.updateRoom(this.apartments[i])
    .then(() =>{
      updatedCount++;
      //tracking upload progress
       this.uploadProgressPercentage = (updatedCount/this.apartments.length)
       if(updatedCount == this.apartments.length){
         //display completion message
         this.showUploadProgressBar = false;
         this.uploadSuccess()
       }
    })
    .catch(err =>{
      console.log(err);
    })
  }
}

  //-------------------------------Shared Area operartions---------------------------------------

 /**Handles deletion of picture from backroom.pictures array and from firebase storage
 given an index of the picture to delete
 @param i index of picture to be deleted from backroom pictures
 @return void
 */
 deleteSharedAreaPic(i: number){
   let pic = this.property.shared_area_pics.splice(i, 1);
   const storageRef = this.afstorage.ref(`${pic[0].path}/${pic[0].name}`);
   storageRef.delete()
 }

 /**Handles updating the backroom object when more pictures are added and uploading
 the pictures to firebase storage 
 @param event with files in the target
 @return void
 */
 updateMoreSharedAreaPics(event){
   let length = this.property.shared_area_pics.length;
   //map the files object into a files array
   let files = Object.keys(event.target.files).map(ind =>{
     let file = event.target.files[ind];
     return file;
   })
   //Deals with initial upload but does not take into account multiple attempts, where array keeps growing
   files.forEach(fl =>{
     let fileUpload: FileUpload = {
        file: fl,
        path: "SharedAreaImages",
        url: "",
        name: fl.name,
        progress: 0,
        loaded: false
     }
     this.property.shared_area_pics.push(fileUpload);
   })
   this.uploadSharedAreaPics(length);
 }

 /**Handles updating the backroom object when initial pictures are added and uploading
 the pictures to firebase storage 
 @param event with files in the target
 @return void
 */
 updateSharedAreaPics(event){
   //clearing backroom pics before update till I find a better way to update
   
     this.property.shared_area_pics = [];
   
   //map the files object into a files array
   let files = Object.keys(event.target.files).map(ind =>{
     let file = event.target.files[ind];
     return file;
   })
   //Deals with initial upload but does not take into account multiple attempts, where array keeps growing
   files.forEach(fl =>{
     let fileUpload: FileUpload = {
        file: fl,
        path: "SharedAreaImages",
        url: "",
        name: fl.name,
        progress: 0,
        loaded: false
     }
     this.property.shared_area_pics.push(fileUpload);
   })
   this.uploadSharedAreaPics();
 }

 /**Handles button click for selecting initial backroom pics and triggers
 a file input dialog 
 */
 selectSharedAreaPics(){
   this.shared_area_pics_handle.nativeElement.click();
 }

 /**Handles button click for selecting additional backroom pics and triggers
 a file input dialog 
 */
 addMoreSharedAreaPics(){
   this.more_shared_area_pics_handle.nativeElement.click();
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
        path: "RoomImages",
        url: "",
        name: fl.name,
        progress: 0,
        loaded: false
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
        path: "RoomImages",
        url: "",
        name: fl.name,
        progress: 0,
        loaded: false
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



//-----------------------------Single Room Operations-------------------------------------------------------

/**Handles deletion of picture from backroom.pictures array and from firebase storage
 given an index of the picture to delete
 @param i index of picture to be deleted from backroom pictures
 @return void
 */
 deleteSingleRoomPic(i: number){
   let pic = this.single.pictures.splice(i, 1);
   const storageRef = this.afstorage.ref(`${pic[0].path}/${pic[0].name}`);
   storageRef.delete()
 }

selectSingleRoomPics(){
   this.single_room_pics_handle.nativeElement.click();
}

updateSingleRoomPics(event){
   //clearing backroom pics before update till I find a better way to update
   
     this.single.pictures = [];
   
   //map the files object into a files array
   let files = Object.keys(event.target.files).map(ind =>{
     let file = event.target.files[ind];
     return file;
   })
   //Deals with initial upload but does not take into account multiple attempts, where array keeps growing
   files.forEach(fl =>{
     let fileUpload: FileUpload = {
        file: fl,
        path: "RoomImages",
        url: "",
        name: fl.name,
        progress: 0,
        loaded: false
     }
     this.single.pictures.push(fileUpload);
   })
   this.uploadSingleRoomPics();
 }

 addMoreSingleRoomPics(){
   this.more_sr_pics_handle.nativeElement.click();
 }

  /**Handles updating the backroom object when more pictures are added and uploading
 the pictures to firebase storage 
 @param event with files in the target
 @return void
 */
 updateMoreSingleRoomPics(event){
   let length = this.single.pictures.length;
   //map the files object into a files array
   let files = Object.keys(event.target.files).map(ind =>{
     let file = event.target.files[ind];
     return file;
   })
   //Deals with initial upload but does not take into account multiple attempts, where array keeps growing
   files.forEach(fl =>{
     let fileUpload: FileUpload = {
        file: fl,
        path: "RoomImages",
        url: "",
        name: fl.name,
        progress: 0,
        loaded: false
     }
     this.single.pictures.push(fileUpload);
   })
   this.uploadSingleRoomPics(length);
 }

//---------------------------------Two Sharing Operations----------------------------------------

/**Handles deletion of picture from backroom.pictures array and from firebase storage
 given an index of the picture to delete
 @param i index of picture to be deleted from backroom pictures
 @return void
 */
 deleteTwoSharingRoomPic(i: number){
   let pic = this.two_sharing.pictures.splice(i, 1);
   const storageRef = this.afstorage.ref(`${pic[0].path}/${pic[0].name}`);
   storageRef.delete()
 }

selectTwoSharingRoomPics(){
   this.two_sharing_room_pics_handle.nativeElement.click();
}

updateTwoSharingRoomPics(event){
   //clearing backroom pics before update till I find a better way to update
   
     this.two_sharing.pictures = [];
   
   //map the files object into a files array
   let files = Object.keys(event.target.files).map(ind =>{
     let file = event.target.files[ind];
     return file;
   })
   //Deals with initial upload but does not take into account multiple attempts, where array keeps growing
   files.forEach(fl =>{
     let fileUpload: FileUpload = {
        file: fl,
        path: "RoomImages",
        url: "",
        name: fl.name,
        progress: 0,
        loaded: false
     }
     this.two_sharing.pictures.push(fileUpload);
   })
   this.uploadTwoSharingRoomPics();
 }

 addMoreTwoSharingRoomPics(){
   this.more_two_sh_pics_handle.nativeElement.click();
 }

  /**Handles updating the backroom object when more pictures are added and uploading
 the pictures to firebase storage 
 @param event with files in the target
 @return void
 */
 updateMoreTwoSharingRoomPics(event){
   let length = this.two_sharing.pictures.length;
   //map the files object into a files array
   let files = Object.keys(event.target.files).map(ind =>{
     let file = event.target.files[ind];
     return file;
   })
   //Deals with initial upload but does not take into account multiple attempts, where array keeps growing
   files.forEach(fl =>{
     let fileUpload: FileUpload = {
        file: fl,
        path: "RoomImages",
        url: "",
        name: fl.name,
        progress: 0,
        loaded: false
     }
     this.two_sharing.pictures.push(fileUpload);
   })
   this.uploadTwoSharingRoomPics(length);
 }
 

 //---------------------------------Three Sharing Operations----------------------------------------

/**Handles deletion of picture from backroom.pictures array and from firebase storage
 given an index of the picture to delete
 @param i index of picture to be deleted from backroom pictures
 @return void
 */
 deleteThreeSharingRoomPic(i: number){
   let pic = this.three_sharing.pictures.splice(i, 1);
   const storageRef = this.afstorage.ref(`${pic[0].path}/${pic[0].name}`);
   storageRef.delete()
 }

selectThreeSharingRoomPics(){
   this.three_sharing_room_pics_handle.nativeElement.click();
}

updateThreeSharingRoomPics(event){
   //clearing backroom pics before update till I find a better way to update
   
     this.three_sharing.pictures = [];
   
   //map the files object into a files array
   let files = Object.keys(event.target.files).map(ind =>{
     let file = event.target.files[ind];
     return file;
   })
   //Deals with initial upload but does not take into account multiple attempts, where array keeps growing
   files.forEach(fl =>{
     let fileUpload: FileUpload = {
        file: fl,
        path: "RoomImages",
        url: "",
        name: fl.name,
        progress: 0,
        loaded: false
     }
     this.three_sharing.pictures.push(fileUpload);
   })
   this.uploadThreeSharingRoomPics();
 }

 addMoreThreeSharingRoomPics(){
   this.more_three_sh_pics_handle.nativeElement.click();
 }

  /**Handles updating the backroom object when more pictures are added and uploading
 the pictures to firebase storage 
 @param event with files in the target
 @return void
 */
 updateMoreThreeSharingRoomPics(event){
   let length = this.three_sharing.pictures.length;
   //map the files object into a files array
   let files = Object.keys(event.target.files).map(ind =>{
     let file = event.target.files[ind];
     return file;
   })
   //Deals with initial upload but does not take into account multiple attempts, where array keeps growing
   files.forEach(fl =>{
     let fileUpload: FileUpload = {
        file: fl,
        path: "RoomImages",
        url: "",
        name: fl.name,
        progress: 0,
        loaded: false
     }
     this.three_sharing.pictures.push(fileUpload);
   })
   this.uploadThreeSharingRoomPics(length);
 }


//-----------------------------Ensuite Operations-------------------------------------------------------

/**Handles deletion of picture from backroom.pictures array and from firebase storage
 given an index of the picture to delete
 @param i index of picture to be deleted from backroom pictures
 @return void
 */
 deleteEnsuitePic(i: number){
   let pic = this.ensuite.pictures.splice(i, 1);
   const storageRef = this.afstorage.ref(`${pic[0].path}/${pic[0].name}`);
   storageRef.delete()
 }

selectEnsuitePics(){
   this.ensuite_pics_handle.nativeElement.click();
}

updateEnsuitePics(event){
   //clearing backroom pics before update till I find a better way to update
   
     this.ensuite.pictures = [];
   
   //map the files object into a files array
   let files = Object.keys(event.target.files).map(ind =>{
     let file = event.target.files[ind];
     return file;
   })
   //Deals with initial upload but does not take into account multiple attempts, where array keeps growing
   files.forEach(fl =>{
     let fileUpload: FileUpload = {
        file: fl,
        path: "RoomImages",
        url: "",
        name: fl.name,
        progress: 0,
        loaded: false
     }
     this.ensuite.pictures.push(fileUpload);
   })
   this.uploadEnsuitePics();
 }

 addMoreEnsuitePics(){
   this.more_ensuite_pics_handle.nativeElement.click();
 }

  /**Handles updating the backroom object when more pictures are added and uploading
 the pictures to firebase storage 
 @param event with files in the target
 @return void
 */
 updateMoreEnsuitePics(event){
   let length = this.ensuite.pictures.length;
   //map the files object into a files array
   let files = Object.keys(event.target.files).map(ind =>{
     let file = event.target.files[ind];
     return file;
   })
   //Deals with initial upload but does not take into account multiple attempts, where array keeps growing
   files.forEach(fl =>{
     let fileUpload: FileUpload = {
        file: fl,
        path: "RoomImages",
        url: "",
        name: fl.name,
        progress: 0,
        loaded: false
     }
     this.ensuite.pictures.push(fileUpload);
   })
   this.uploadEnsuitePics(length);
 }


 //-----------------------------Apartment Operations-------------------------------------------------------

/**Handles deletion of picture from backroom.pictures array and from firebase storage
 given an index of the picture to delete
 @param i index of picture to be deleted from backroom pictures
 @return void
 */
 deleteApartmentPic(i: number){
   let pic = this.apartment.pictures.splice(i, 1);
   const storageRef = this.afstorage.ref(`${pic[0].path}/${pic[0].name}`);
   storageRef.delete()
 }

selectApartmentPics(){
   this.single_room_pics_handle.nativeElement.click();
}

updateApartmentPics(event){
   //clearing backroom pics before update till I find a better way to update
   
     this.apartment.pictures = [];
   
   //map the files object into a files array
   let files = Object.keys(event.target.files).map(ind =>{
     let file = event.target.files[ind];
     return file;
   })
   //Deals with initial upload but does not take into account multiple attempts, where array keeps growing
   files.forEach(fl =>{
     let fileUpload: FileUpload = {
        file: fl,
        path: "RoomImages",
        url: "",
        name: fl.name,
        progress: 0,
        loaded: false
     }
     this.apartment.pictures.push(fileUpload);
   })
   this.uploadApartmentPics();
 }

 addMoreApartmentPics(){
   this.more_apartment_pics_handle.nativeElement.click();
 }

  /**Handles updating the backroom object when more pictures are added and uploading
 the pictures to firebase storage 
 @param event with files in the target
 @return void
 */
 updateMoreApartmentPics(event){
   let length = this.apartment.pictures.length;
   //map the files object into a files array
   let files = Object.keys(event.target.files).map(ind =>{
     let file = event.target.files[ind];
     return file;
   })
   //Deals with initial upload but does not take into account multiple attempts, where array keeps growing
   files.forEach(fl =>{
     let fileUpload: FileUpload = {
        file: fl,
        path: "RoomImages",
        url: "",
        name: fl.name,
        progress: 0,
        loaded: false
     }
     this.apartment.pictures.push(fileUpload);
   })
   this.uploadApartmentPics(length);
 }

//--------------------------------------------------------------------------------------------------

 /**Handles adding the different room types specified by the user
 into the property object (in their specified quantities) 
 */
 async addRoomsToProperty(){
   
   this.updatePropertyInRooms(); //update the property details in each room

   //add bachelors to property
   if(this.property.rooms.apartments > 0){
     this.apartment.room_number = "apartment 1" ;  //give room unique room number
     await this.room_svc.createRoom(this.apartment) //create room on db
     .then(data =>{
       this.apartment.room_id = data.id;
       this.apartments.push(this.apartment); //save room state on the current app instance 
     })
     .catch(err =>{
       console.log(err);
     })
   }
   
   //add backrooms to property
   if(this.property.rooms.backrooms > 0){
     this.backroom.room_number = "backroom 1";
     await this.room_svc.createRoom(this.backroom)
     .then(data =>{
       this.backroom.room_id = data.id;
       this.apartments.push(this.backroom);
     })
     .catch(err =>{
       console.log(err);
     })
   }
   
   //add ensuites to property
   if(this.property.rooms.ensuites > 0){
     this.ensuite.room_number = "ensuite 1";
     await this.room_svc.createRoom(this.ensuite)
     .then(data =>{
       this.ensuite.room_id = data.id;
       this.apartments.push(this.ensuite);
     })
     .catch(err =>{
       console.log(err);
     })
   }
   
   //add singles to property
   if(this.property.rooms.singles > 0){
     this.single.room_number = "single 1";
     await this.room_svc.createRoom(this.single)
     .then(data =>{
       this.single.room_id = data.id;
       this.apartments.push(this.single);
     })
     .catch(err =>{
       console.log(err);
     })
   }
   
   //add two sharings to property
   if(this.property.rooms.two_sharings > 0){
     this.two_sharing.room_number = "two_sharing 1";
     await this.room_svc.createRoom(this.two_sharing)
     .then(data =>{
       this.two_sharing.room_id = data.id;
       this.apartments.push(this.two_sharing);
     })
     .catch(err =>{
       console.log(err);
     })
   }
   
   //add three sharings to property
   if(this.property.rooms.three_sharings > 0){
     this.three_sharing.room_number = "three sharing 1";
     await this.room_svc.createRoom(this.three_sharing)
     .then(data =>{
       this.three_sharing.room_id = data.id;
       this.apartments.push(this.three_sharing);
     })
     .catch(err =>{
       console.log(err);
     })
   }
   
   this.presentToast("Rooms Saved !");
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
          if(i == (this.backroom.pictures.length - 1))
            this.backroom.display_pic_url = url;
        })
      })
    }
  }


  uploadSingleRoomPics(start_p?: number){
    for(let i: number = start_p || 0; i < this.single.pictures.length; i++){
      const storageRef = this.afstorage.ref(`${this.single.pictures[i].path}/${this.single.pictures[i].name}`);
      let uploadTask = storageRef.put(this.single.pictures[i].file);
      uploadTask.percentageChanges().subscribe(data =>{
        this.single.pictures[i].progress = data;
      })
      uploadTask.snapshotChanges().subscribe(data =>{
      },
      err =>{
      },
      () =>{
        storageRef.getDownloadURL()
        .pipe(take(1))
        .subscribe(url =>{
          this.single.pictures[i].url = url;
          if(i == (this.single.pictures.length - 1))
            this.single.display_pic_url = url;
        })
      })
    }
  }

  uploadTwoSharingRoomPics(start_p?: number){
    for(let i: number = start_p || 0; i < this.two_sharing.pictures.length; i++){
      const storageRef = this.afstorage.ref(`${this.two_sharing.pictures[i].path}/${this.two_sharing.pictures[i].name}`);
      let uploadTask = storageRef.put(this.two_sharing.pictures[i].file);
      uploadTask.percentageChanges().subscribe(data =>{
        this.two_sharing.pictures[i].progress = data;
      })
      uploadTask.snapshotChanges().subscribe(data =>{
      },
      err =>{
      },
      () =>{
        storageRef.getDownloadURL()
        .pipe(take(1))
        .subscribe(url =>{
          this.two_sharing.pictures[i].url = url;
          if(i == (this.two_sharing.pictures.length - 1))
            this.two_sharing.display_pic_url = url;
        })
      })
    }
  }

  uploadThreeSharingRoomPics(start_p?: number){
    for(let i: number = start_p || 0; i < this.three_sharing.pictures.length; i++){
      const storageRef = this.afstorage.ref(`${this.three_sharing.pictures[i].path}/${this.three_sharing.pictures[i].name}`);
      let uploadTask = storageRef.put(this.three_sharing.pictures[i].file);
      uploadTask.percentageChanges().subscribe(data =>{
        this.three_sharing.pictures[i].progress = data;
      })
      uploadTask.snapshotChanges().subscribe(data =>{
      },
      err =>{
      },
      () =>{
        storageRef.getDownloadURL()
        .pipe(take(1))
        .subscribe(url =>{
          this.three_sharing.pictures[i].url = url;
          if(i == (this.three_sharing.pictures.length - 1))
            this.three_sharing.display_pic_url = url;
        })
      })
    }
  }

  uploadEnsuitePics(start_p?: number){
    for(let i: number = start_p || 0; i < this.ensuite.pictures.length; i++){
      const storageRef = this.afstorage.ref(`${this.ensuite.pictures[i].path}/${this.ensuite.pictures[i].name}`);
      let uploadTask = storageRef.put(this.ensuite.pictures[i].file);
      uploadTask.percentageChanges().subscribe(data =>{
        this.ensuite.pictures[i].progress = data;
      })
      uploadTask.snapshotChanges().subscribe(data =>{
      },
      err =>{
      },
      () =>{
        storageRef.getDownloadURL()
        .pipe(take(1))
        .subscribe(url =>{
          this.ensuite.pictures[i].url = url;
          if(i == (this.ensuite.pictures.length - 1))
            this.ensuite.display_pic_url = url;
        })
      })
    }
  }

  uploadApartmentPics(start_p?: number){
    for(let i: number = start_p || 0; i < this.apartment.pictures.length; i++){
      const storageRef = this.afstorage.ref(`${this.apartment.pictures[i].path}/${this.apartment.pictures[i].name}`);
      let uploadTask = storageRef.put(this.apartment.pictures[i].file);
      uploadTask.percentageChanges().subscribe(data =>{
        this.apartment.pictures[i].progress = data;
      })
      uploadTask.snapshotChanges().subscribe(data =>{
      },
      err =>{
      },
      () =>{
        storageRef.getDownloadURL()
        .pipe(take(1))
        .subscribe(url =>{
          this.apartment.pictures[i].url = url;
          if(i == (this.apartment.pictures.length - 1))
            this.apartment.display_pic_url = url;
        })
      })
    }
  }


  uploadSharedAreaPics(start_p?: number){
    for(let i: number = start_p || 0; i < this.property.shared_area_pics.length; i++){
      const storageRef = this.afstorage.ref(`${this.property.shared_area_pics[i].path}/${this.property.shared_area_pics[i].name}`);
      let uploadTask = storageRef.put(this.property.shared_area_pics[i].file);
      uploadTask.percentageChanges().subscribe(data =>{
        this.property.shared_area_pics[i].progress = data;
      })
      uploadTask.snapshotChanges().subscribe(data =>{
      },
      err =>{
      },
      () =>{
        storageRef.getDownloadURL()
        .pipe(take(1))
        .subscribe(url =>{
          this.property.shared_area_pics[i].url = url;
          if(i == (this.property.shared_area_pics.length - 1))
            this.property.display_pic_url = url;
        })
      })
    }
  }

}
