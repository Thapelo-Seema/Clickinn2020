import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenanceIssuePage } from './maintenance-issue.page';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceIssuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintenanceIssuePageRoutingModule {}
