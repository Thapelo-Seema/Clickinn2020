import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bursary-request',
  templateUrl: './bursary-request.page.html',
  styleUrls: ['./bursary-request.page.scss'],
})
export class BursaryRequestPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  back(){
  	window.history.back();
  }

}
