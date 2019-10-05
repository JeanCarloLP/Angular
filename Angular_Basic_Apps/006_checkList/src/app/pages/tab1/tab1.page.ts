import { Component } from '@angular/core';
import { ChecklistService } from 'src/app/services/checklist.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { List } from '../../models/list.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public checklistService: ChecklistService,
               private router: Router,
               private alertCtrl: AlertController ) {
  }

  async addList() {
    const alert = await this.alertCtrl.create({
      header: 'New List',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'name list'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel');
          }
        },
        {
          text: 'Create',
          handler: ( data ) => {
            console.log( data );
            if ( data.title.length === 0 ) {
              return;
            }
            const IDLIST = this.checklistService.createList( data.title );
            this.router.navigateByUrl (`/tabs/tab1/add-list/${ IDLIST }`);
          }
        }
      ]
    });
    alert.present();
    }

}
