import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToolsSignUpPage } from './tools-sign-up.page';

const routes: Routes = [
  {
    path: '',
    component: ToolsSignUpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToolsSignUpPageRoutingModule {}
