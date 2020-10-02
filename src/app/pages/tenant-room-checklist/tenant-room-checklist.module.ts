import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TenantRoomChecklistPageRoutingModule } from './tenant-room-checklist-routing.module';

import { TenantRoomChecklistPage } from './tenant-room-checklist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TenantRoomChecklistPageRoutingModule
  ],
  declarations: [TenantRoomChecklistPage]
})
export class TenantRoomChecklistPageModule {}
