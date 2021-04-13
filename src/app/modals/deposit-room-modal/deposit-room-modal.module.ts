import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { IonicModule } from '@ionic/angular';

import { DepositRoomModalPageRoutingModule } from './deposit-room-modal-routing.module';

import { DepositRoomModalPage } from './deposit-room-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    IonicModule,
    DepositRoomModalPageRoutingModule
  ],
  declarations: [DepositRoomModalPage]
})
export class DepositRoomModalPageModule {}
