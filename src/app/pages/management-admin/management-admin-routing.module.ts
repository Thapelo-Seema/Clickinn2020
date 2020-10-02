import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagementAdminPage } from './management-admin.page';

const routes: Routes = [
  {
    path: '',
    component: ManagementAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagementAdminPageRoutingModule {}
