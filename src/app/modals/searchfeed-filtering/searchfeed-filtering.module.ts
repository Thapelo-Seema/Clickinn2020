import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchfeedFilteringPageRoutingModule } from './searchfeed-filtering-routing.module';

import { SearchfeedFilteringPage } from './searchfeed-filtering.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchfeedFilteringPageRoutingModule
  ],
  declarations: [SearchfeedFilteringPage]
})
export class SearchfeedFilteringPageModule {}
