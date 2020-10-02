import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomizeLeasePageRoutingModule } from './customize-lease-routing.module';

import { CustomizeLeasePage } from './customize-lease.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomizeLeasePageRoutingModule
  ],
  declarations: [CustomizeLeasePage]
})
export class CustomizeLeasePageModule {}
