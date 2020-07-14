import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchfeedFilteringPage } from './searchfeed-filtering.page';

const routes: Routes = [
  {
    path: '',
    component: SearchfeedFilteringPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchfeedFilteringPageRoutingModule {}
