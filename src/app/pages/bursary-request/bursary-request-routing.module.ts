import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BursaryRequestPage } from './bursary-request.page';

const routes: Routes = [
  {
    path: '',
    component: BursaryRequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BursaryRequestPageRoutingModule {}
