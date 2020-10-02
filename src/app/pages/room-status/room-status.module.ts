import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoomStatusPageRoutingModule } from './room-status-routing.module';

import { RoomStatusPage } from './room-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoomStatusPageRoutingModule
  ],
  declarations: [RoomStatusPage]
})
export class RoomStatusPageModule {}
