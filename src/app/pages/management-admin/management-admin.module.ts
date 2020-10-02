import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagementAdminPageRoutingModule } from './management-admin-routing.module';

import { ManagementAdminPage } from './management-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManagementAdminPageRoutingModule
  ],
  declarations: [ManagementAdminPage]
})
export class ManagementAdminPageModule {}
