import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagementSignUpPageRoutingModule } from './management-sign-up-routing.module';

import { ManagementSignUpPage } from './management-sign-up.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManagementSignUpPageRoutingModule
  ],
  declarations: [ManagementSignUpPage]
})
export class ManagementSignUpPageModule {}
