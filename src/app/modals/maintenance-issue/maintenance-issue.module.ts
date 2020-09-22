import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintenanceIssuePageRoutingModule } from './maintenance-issue-routing.module';

import { MaintenanceIssuePage } from './maintenance-issue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaintenanceIssuePageRoutingModule
  ],
  declarations: [MaintenanceIssuePage]
})
export class MaintenanceIssuePageModule {}
