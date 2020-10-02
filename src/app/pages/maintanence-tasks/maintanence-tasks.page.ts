import { Component, OnInit } from '@angular/core';
import { MaintenanceIssuePage } from '../../modals/maintenance-issue/maintenance-issue.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-maintanence-tasks',
  templateUrl: './maintanence-tasks.page.html',
  styleUrls: ['./maintanence-tasks.page.scss'],
})
export class MaintanenceTasksPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async addIssue(){
  	const modal = await this.modalCtrl.create({
  		component: MaintenanceIssuePage,
  		cssClass: 'modalClass'
  	});

  	return await modal.present();
  }

}
