import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepositPaymentPage } from './deposit-payment.page';

const routes: Routes = [
  {
    path: '',
    component: DepositPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepositPaymentPageRoutingModule {}
