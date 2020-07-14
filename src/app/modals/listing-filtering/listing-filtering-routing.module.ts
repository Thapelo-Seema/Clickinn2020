import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListingFilteringPage } from './listing-filtering.page';

const routes: Routes = [
  {
    path: '',
    component: ListingFilteringPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingFilteringPageRoutingModule {}
