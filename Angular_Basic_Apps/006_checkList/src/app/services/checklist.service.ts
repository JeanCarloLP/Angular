import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class ChecklistService {

  checklists: List[] = []; // we will work with all the list

  constructor() {
    this.loadStorage();
  }

  createList( title: string ) {
    const NEWLIST = new List( title );
    this.checklists.push( NEWLIST );
    this.saveStorage();

    return NEWLIST.id;
  }

  deleteList( checklist: List) {
    this.checklists = this.checklists.filter( dataList => dataList.id !== checklist.id );
    this.saveStorage();
  }

  getList( id: string | number) {
    // in this case id must be always a number
    id = Number(id);
    return this.checklists.find( dataList => dataList.id === id );
  }

  saveStorage() {
    localStorage.setItem('data', JSON.stringify(this.checklists));
  }

  loadStorage() {
    if ( localStorage.getItem('data') ) {
      this.checklists = JSON.parse ( localStorage.getItem('data') );
    } else {
      this.checklists = [];
    }
  }
}
