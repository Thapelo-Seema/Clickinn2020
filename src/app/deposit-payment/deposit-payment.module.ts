import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepositPaymentPageRoutingModule } from './deposit-payment-routing.module';

import { DepositPaymentPage } from './deposit-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DepositPaymentPageRoutingModule
  ],
  declarations: [DepositPaymentPage]
})
export class DepositPaymentPageModule {}
