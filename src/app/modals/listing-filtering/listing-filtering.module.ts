import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListingFilteringPageRoutingModule } from './listing-filtering-routing.module';

import { ListingFilteringPage } from './listing-filtering.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListingFilteringPageRoutingModule
  ],
  declarations: [ListingFilteringPage]
})
export class ListingFilteringPageModule {}
