import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlacementSignUpPageRoutingModule } from './placement-sign-up-routing.module';

import { PlacementSignUpPage } from './placement-sign-up.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlacementSignUpPageRoutingModule
  ],
  declarations: [PlacementSignUpPage]
})
export class PlacementSignUpPageModule {}
