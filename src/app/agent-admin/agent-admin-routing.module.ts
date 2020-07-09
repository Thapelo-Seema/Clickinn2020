import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentAdminPage } from './agent-admin.page';

const routes: Routes = [
  {
    path: '',
    component: AgentAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentAdminPageRoutingModule {}
