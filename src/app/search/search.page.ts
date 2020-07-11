import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  funding: any = "";
  agentMode: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  back(){
  	window.history.back();
  }

}
