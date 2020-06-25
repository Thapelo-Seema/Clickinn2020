import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandlordProductsPage } from './landlord-products.page';

const routes: Routes = [
  {
    path: '',
    component: LandlordProductsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandlordProductsPageRoutingModule {}
