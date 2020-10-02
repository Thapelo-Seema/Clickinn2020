import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TenantDashboardPageRoutingModule } from './tenant-dashboard-routing.module';

import { TenantDashboardPage } from './tenant-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TenantDashboardPageRoutingModule
  ],
  declarations: [TenantDashboardPage]
})
export class TenantDashboardPageModule {}
