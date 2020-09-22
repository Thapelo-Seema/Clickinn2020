import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TenantDashboardPage } from './tenant-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: TenantDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TenantDashboardPageRoutingModule {}
