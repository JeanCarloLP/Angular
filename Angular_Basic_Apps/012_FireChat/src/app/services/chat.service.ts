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
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
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
      name: 'Demo',
      message: text,
      date: new Date().getTime()
    };

    return this.itemsCollection.add( message );

  }
}
