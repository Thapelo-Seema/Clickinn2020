import { Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-upload-listing',
  templateUrl: './upload-listing.page.html',
  styleUrls: ['./upload-listing.page.scss'],
})
export class UploadListingPage implements OnInit {

  
  agentMode: boolean = false;
  pageActive: number = 1;

  constructor() { 


  }

  ngOnInit() {
  }

 nextPage(){
   ++this.pageActive;
 }

 prevPage(){
   --this.pageActive;
 }

 saveAndUpload(){
   
 }

  

}
