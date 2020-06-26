import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BursaryRequestPageRoutingModule } from './bursary-request-routing.module';

import { BursaryRequestPage } from './bursary-request.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BursaryRequestPageRoutingModule
  ],
  declarations: [BursaryRequestPage]
})
export class BursaryRequestPageModule {}
