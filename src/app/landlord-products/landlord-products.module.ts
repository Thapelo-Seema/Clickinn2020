import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandlordProductsPageRoutingModule } from './landlord-products-routing.module';

import { LandlordProductsPage } from './landlord-products.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandlordProductsPageRoutingModule
  ],
  declarations: [LandlordProductsPage]
})
export class LandlordProductsPageModule {}
