import { Directive, EventEmitter, ElementRef, HostListener, Input, Output } from '@angular/core';
import { FileItem } from '../models/file-item';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

  @Input() files: FileItem[] = [];
  @Output() mouseOverDropArea: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  @HostListener( 'dragover', ['$event'])
  public onDragEnter( event: any ) {
    this.mouseOverDropArea.emit( true );
    this._dontOpenImage( event );
  }

  @HostListener( 'dragleave', ['$event'])
  public onDragLeave( event: any ) {
    this.mouseOverDropArea.emit( false );
    this._dontOpenImage( event );
  }

  @HostListener( 'drop', ['$event'])
  public onDrop( event: any ) {
    const transfert = this._getTransfert( event );
    if (!transfert) {
      return;
    }
    this._getFiles( transfert.files );
    this._dontOpenImage( event );
    this.mouseOverDropArea.emit( false );

  }

  private _getTransfert( event: any ) {
    // drag and drop behaviour depends on the browser
    this._dontOpenImage( event );
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
  }

  private _getFiles( filesList: FileList ) {
    // tslint:disable-next-line:forin
    for ( const property in Object.getOwnPropertyNames( filesList ) ) {
      const tempFile = filesList[property];
      if ( this._canBeLoaded( tempFile ) ) {
        const newFile = new FileItem( tempFile );
        this.files.push( newFile );
      }
    }
  }

  // Validations
  private _canBeLoaded( file: File ): boolean {
    if ( !this._fileAlreadyExist( file.name ) && this._checkType( file.type ) ) {
      return true;
    } else {
      return false;
    }
  }

  private _dontOpenImage( event ) {
    event.preventDefault();
    event.stopPropagation();
  }

  private _fileAlreadyExist( fileName: string ): boolean {
    if (this.files.length > 0) {
      for (const file of this.files) {
        if ( file.fileName === fileName ) {
          console.log('El archivo ' + fileName + ' ya esta agregado');
          return true;
        }
      }
      return false;
    }
    return false;
  }

  private _checkType( fileType: string ): boolean {
    return ( fileType === '' || fileType === undefined ) ? false : fileType.startsWith('image');
  }

}
