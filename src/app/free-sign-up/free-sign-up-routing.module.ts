import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FreeSignUpPage } from './free-sign-up.page';

const routes: Routes = [
  {
    path: '',
    component: FreeSignUpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FreeSignUpPageRoutingModule {}
