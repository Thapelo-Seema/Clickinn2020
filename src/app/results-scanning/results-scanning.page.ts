import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results-scanning',
  templateUrl: './results-scanning.page.html',
  styleUrls: ['./results-scanning.page.scss'],
})
export class ResultsScanningPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  back(){
  	window.history.back();
  }

}
