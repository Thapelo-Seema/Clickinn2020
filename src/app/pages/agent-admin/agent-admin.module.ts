import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgentAdminPageRoutingModule } from './agent-admin-routing.module';

import { AgentAdminPage } from './agent-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgentAdminPageRoutingModule
  ],
  declarations: [AgentAdminPage]
})
export class AgentAdminPageModule {}
