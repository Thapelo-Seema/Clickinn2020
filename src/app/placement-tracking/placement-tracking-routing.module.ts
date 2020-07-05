import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacementTrackingPage } from './placement-tracking.page';

const routes: Routes = [
  {
    path: '',
    component: PlacementTrackingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacementTrackingPageRoutingModule {}
