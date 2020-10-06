import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  count: number = 0;
  constructor(public router: Router) {}

  ngOnInit() {
    //setTimeout(() => this.content.nativeElement.focus(), 300);
  }

  gotoManagement(){
  	if(this.count >= 10){
  		this.router.navigate(['/management-admin'])
  	}
  	this.count++
  }

}
