import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintanenceTasksPageRoutingModule } from './maintanence-tasks-routing.module';

import { MaintanenceTasksPage } from './maintanence-tasks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaintanenceTasksPageRoutingModule
  ],
  declarations: [MaintanenceTasksPage]
})
export class MaintanenceTasksPageModule {}
