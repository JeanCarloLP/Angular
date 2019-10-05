import {ItemList} from './item-list.model';

export class List {
    id: number;
    title: string;
    dateCreation: Date;
    dateAccomplished: Date;
    accomplished: boolean;
    items: ItemList[];

    constructor( title ) {
        this.title = title;
        this.dateCreation = new Date();
        this.accomplished = false;
        this.items = [];
        this.id = new Date().getTime();
    }
}
