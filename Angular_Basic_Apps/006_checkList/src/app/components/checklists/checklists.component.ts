import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ChecklistService } from 'src/app/services/checklist.service';
import { List } from 'src/app/models/list.model';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-checklists',
  templateUrl: './checklists.component.html',
  styleUrls: ['./checklists.component.scss'],
})
export class ChecklistsComponent implements OnInit {

  @ViewChild( IonList , null ) list: IonList;
  @Input() finished = true;

  constructor( public checklistService: ChecklistService,
               private router: Router,
               private alertCtrl: AlertController ) { }

  ngOnInit() {}

  selectedList( checkList: List ) {
    if ( this.finished) {
      this.router.navigateByUrl ( `/tabs/tab2/add-list/${ checkList.id }`);
    } else {
      this.router.navigateByUrl ( `/tabs/tab1/add-list/${ checkList.id }`);
    }
  }

  deleteList( checklist: List) {
    this.checklistService.deleteList(checklist);
  }

  async editListName( checklist: List ) {
    const alert = await this.alertCtrl.create({
      header: 'Edit List',
      inputs: [
        {
          name: 'title',
          type: 'text',
          value: checklist.title,
          placeholder: 'name list'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            // console.log('Cancel');
            this.list.closeSlidingItems();
          }
        },
        {
          text: 'Update',
          handler: ( data ) => {
            // console.log( data );
            if ( data.title.length === 0 ) {
              return;
            }

            checklist.title = data.title;
            this.checklistService.saveStorage();
            this.list.closeSlidingItems();
          }
        }
      ]
    });
    alert.present();
  }

}
