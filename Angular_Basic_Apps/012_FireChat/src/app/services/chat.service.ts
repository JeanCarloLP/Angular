import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Message } from '../interfaces/message.interface';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<Message>;
  public chats: Message[] = [];
  public user: any = {};

  constructor(private afs: AngularFirestore,
              public afAuth: AngularFireAuth ) {
    this.afAuth.authState.subscribe( userData => {
      console.log('User status: ', userData);
      if ( !userData ) {
        return;
      }
      this.user.name = userData.displayName;
      this.user.uid = userData.uid;
    });
  }

  login( account: string ) {
    switch (account) {
      case 'google':
        this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
        break;
      case 'twitter':
        this.afAuth.auth.signInWithPopup(new auth.TwitterAuthProvider());
        break;
      default:
        break;
    }
  }

  logout() {
    this.user = {};
    this.afAuth.auth.signOut();
  }

  loadMessages() {
    this.itemsCollection = this.afs.collection<Message>(
      'chats',
      ref => ref.orderBy('date', 'desc').limit(5)
      );

    return this.itemsCollection.valueChanges().pipe(map( (messages: Message[]) => {
      // console.log( messages );
      this.chats = [];

      for ( const message of messages ) {
        this.chats.unshift( message );
      }

      return this.chats;
    }));
  }

  addMessage( text: string ) {
    const message: Message = {
      name: this.user.name,
      message: text,
      date: new Date().getTime(),
      uid: this.user.uid
    };

    return this.itemsCollection.add( message );

  }
}
