import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-customize-lease',
  templateUrl: './customize-lease.page.html',
  styleUrls: ['./customize-lease.page.scss'],
})
export class CustomizeLeasePage implements OnInit {
  @ViewChild('customLeaseInput') customLeaseInputVar: ElementRef;
  ownLease: boolean = false;
  customizeTemplate: boolean = false;
  scope: string = "";
  documentName: string = "";

  constructor() { }

  ngOnInit() {
  }

  uploadOwnLease(){
    this.customizeTemplate = false;
  	this.ownLease = true;
  }

  customizeClickinnTemplate(){
    this.ownLease = false;
    this.customizeTemplate = true;
  }

  cancelOwn(){
  	this.ownLease = false;
  	this.customizeTemplate = false;
  	this.scope = "";
  }

  chooseLease(){
  	this.customLeaseInputVar.nativeElement.click();
  }

  leaseDocumentSelected(event){
  	this.documentName = event.target.files[0].name;
  }

}
