import { Component, OnInit } from '@angular/core';
import { MaintenanceIssuePage } from '../../modals/maintenance-issue/maintenance-issue.page';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DepositPaymentPage } from '../deposit-payment/deposit-payment.page';

@Component({
  selector: 'app-tenant-dashboard',
  templateUrl: './tenant-dashboard.page.html',
  styleUrls: ['./tenant-dashboard.page.scss'],
})
export class TenantDashboardPage implements OnInit {

  constructor(public modalCtrl: ModalController, private router: Router) { }

  ngOnInit() {
  }

  async addIssue(){
  	const modal = await this.modalCtrl.create({
  		component: MaintenanceIssuePage,
  		cssClass: 'modalClass'
  	});
  	return await modal.present();
  }

  async pay(){
    const modal = await this.modalCtrl.create({
      component: DepositPaymentPage,
      cssClass: 'modalClass',
      componentProps: {
        'payment-type': 'rent'
      }
    });

    return await modal.present();
  }

  gotoProfile(){
    this.router.navigate(['/student-profile']);
  }

  gotoLeases(){
  	this.router.navigate(['/customize-lease']);
  }

  gotoCheckList(){
  	this.router.navigate(['/tenant-room-checklist']);
  }

}
