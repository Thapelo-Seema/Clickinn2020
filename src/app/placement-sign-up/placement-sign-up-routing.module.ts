import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacementSignUpPage } from './placement-sign-up.page';

const routes: Routes = [
  {
    path: '',
    component: PlacementSignUpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacementSignUpPageRoutingModule {}
