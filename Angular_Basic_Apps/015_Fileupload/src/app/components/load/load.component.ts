import { Component, OnInit } from '@angular/core';
import { FileItem } from 'src/app/models/file-item';
import { LoadPicturesService } from 'src/app/services/load-pictures.service';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styles: []
})
export class LoadComponent implements OnInit {

  files: FileItem[] = [];

  dropIsPossible = false;

  constructor( public sLoadImages: LoadPicturesService ) { }

  ngOnInit() {
  }

  loadFiles() {
    this.sLoadImages.loadFirebaseImages( this.files );
  }

  cleanTable() {
    this.files = [];
  }

  testOver( event ) {
    console.log(event);
  }
}
