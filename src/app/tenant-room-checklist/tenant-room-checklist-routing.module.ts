import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TenantRoomChecklistPage } from './tenant-room-checklist.page';

const routes: Routes = [
  {
    path: '',
    component: TenantRoomChecklistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TenantRoomChecklistPageRoutingModule {}
