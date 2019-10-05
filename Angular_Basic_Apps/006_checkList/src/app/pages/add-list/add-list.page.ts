import { Component, OnInit } from '@angular/core';
import { ChecklistService } from 'src/app/services/checklist.service';
import { ActivatedRoute } from '@angular/router';
import { List } from 'src/app/models/list.model';
import { ItemList } from 'src/app/models/item-list.model';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.page.html',
  styleUrls: ['./add-list.page.scss'],
})
export class AddListPage implements OnInit {

  list: List;
  itemName = '';

  constructor( private checkListService: ChecklistService,
               private route: ActivatedRoute ) {
    const LISTID = this.route.snapshot.paramMap.get('listId');

    this.list = checkListService.getList(LISTID);

  }

  ngOnInit() {
  }

  addItem() {
    if ( this.itemName.length === 0 ) {
      return;
    }

    const NEWITEMLIST = new ItemList( this.itemName );
    this.list.items.push(NEWITEMLIST);

    this.itemName = '';
    this.checkListService.saveStorage();
  }

  checkBoxChanged( item: ItemList ) {
    const PENDING = this.list.items.filter( itemData => !itemData.accomplished ).length;
    // console.log({ PENDING });
    if ( PENDING === 0) {
      this.list.dateAccomplished = new Date();
      this.list.accomplished = true;
    } else {
      this.list.dateAccomplished = null;
      this.list.accomplished = false;
    }

    this.checkListService.saveStorage();
    console.log(this.checkListService.checklists);
  }

  delete( i: number) {
    this.list.items.splice( i, 1 );
    this.checkListService.saveStorage();
  }

}
