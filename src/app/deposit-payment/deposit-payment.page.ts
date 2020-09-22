import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deposit-payment',
  templateUrl: './deposit-payment.page.html',
  styleUrls: ['./deposit-payment.page.scss'],
})
export class DepositPaymentPage implements OnInit {
  agentMode: boolean = false;
  pageActive: number = 1;
  constructor() { }

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
