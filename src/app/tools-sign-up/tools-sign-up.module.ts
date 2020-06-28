import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToolsSignUpPageRoutingModule } from './tools-sign-up-routing.module';

import { ToolsSignUpPage } from './tools-sign-up.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToolsSignUpPageRoutingModule
  ],
  declarations: [ToolsSignUpPage]
})
export class ToolsSignUpPageModule {}
