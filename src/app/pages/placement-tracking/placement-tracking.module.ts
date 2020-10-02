import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlacementTrackingPageRoutingModule } from './placement-tracking-routing.module';

import { PlacementTrackingPage } from './placement-tracking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlacementTrackingPageRoutingModule
  ],
  declarations: [PlacementTrackingPage]
})
export class PlacementTrackingPageModule {}
