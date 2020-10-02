import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomizeLeasePage } from './customize-lease.page';

const routes: Routes = [
  {
    path: '',
    component: CustomizeLeasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomizeLeasePageRoutingModule {}
