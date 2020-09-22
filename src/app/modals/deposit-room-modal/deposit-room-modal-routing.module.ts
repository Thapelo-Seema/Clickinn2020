import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepositRoomModalPage } from './deposit-room-modal.page';

const routes: Routes = [
  {
    path: '',
    component: DepositRoomModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepositRoomModalPageRoutingModule {}
