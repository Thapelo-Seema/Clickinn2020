import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmRoomAvailabilityPageRoutingModule } from './confirm-room-availability-routing.module';

import { ConfirmRoomAvailabilityPage } from './confirm-room-availability.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmRoomAvailabilityPageRoutingModule
  ],
  declarations: [ConfirmRoomAvailabilityPage]
})
export class ConfirmRoomAvailabilityPageModule {}
