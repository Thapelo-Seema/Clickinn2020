import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinancialAdminPage } from './financial-admin.page';

const routes: Routes = [
  {
    path: '',
    component: FinancialAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinancialAdminPageRoutingModule {}
