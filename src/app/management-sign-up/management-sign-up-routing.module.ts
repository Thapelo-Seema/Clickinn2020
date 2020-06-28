import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagementSignUpPage } from './management-sign-up.page';

const routes: Routes = [
  {
    path: '',
    component: ManagementSignUpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagementSignUpPageRoutingModule {}
