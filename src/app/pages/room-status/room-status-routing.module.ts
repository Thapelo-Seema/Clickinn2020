import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoomStatusPage } from './room-status.page';

const routes: Routes = [
  {
    path: '',
    component: RoomStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomStatusPageRoutingModule {}
