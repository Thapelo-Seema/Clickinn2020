import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FreeSignUpPageRoutingModule } from './free-sign-up-routing.module';

import { FreeSignUpPage } from './free-sign-up.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FreeSignUpPageRoutingModule
  ],
  declarations: [FreeSignUpPage]
})
export class FreeSignUpPageModule {}
