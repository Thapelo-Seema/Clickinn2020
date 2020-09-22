import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmRoomAvailabilityPage } from './confirm-room-availability.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmRoomAvailabilityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmRoomAvailabilityPageRoutingModule {}
