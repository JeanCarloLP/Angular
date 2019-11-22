import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { FileItem } from '../models/file-item';

@Injectable({
  providedIn: 'root'
})

export class LoadPicturesService {

  private FOLDER_IMAGES = 'img';

  constructor( private db: AngularFirestore ) {}

  loadFirebaseImages( images: FileItem[]) {
    const storageRef = firebase.storage().ref();

    for ( const item of images ) {

      item.uploading = true;

      if ( item.progress >= 100 ) {
        continue;
      }

      const uploadTask: firebase.storage.UploadTask = storageRef.child(
        `${ this.FOLDER_IMAGES }/${ item.fileName }`).put( item.file );

      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        ( snapshot: firebase.storage.UploadTaskSnapshot ) => item.progress =
          ( snapshot.bytesTransferred / snapshot.totalBytes ) * 100,
        ( error ) => console.error(' Error: ', error ),
        () => {
                console.log( 'Picture uploaded' );
                uploadTask.snapshot.ref.getDownloadURL().then(
                  (downloadURL) => {
                    item.fileUrl = downloadURL;
                    item.uploading = false;
                    this.saveImage({
                      name: item.fileName,
                      url: item.fileUrl
                    });
                  });
        }
      );
    }
  }

  private saveImage( image: { name: string, url: string } ) {
    this.db.collection(`/${ this.FOLDER_IMAGES }`).add( image );
  }

}
