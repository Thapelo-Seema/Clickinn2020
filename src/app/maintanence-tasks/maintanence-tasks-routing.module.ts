import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintanenceTasksPage } from './maintanence-tasks.page';

const routes: Routes = [
  {
    path: '',
    component: MaintanenceTasksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintanenceTasksPageRoutingModule {}
