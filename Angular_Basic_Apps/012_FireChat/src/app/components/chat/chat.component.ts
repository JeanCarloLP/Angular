import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  message: string = '';
  element: any;
  actualDate: string = new Date().toLocaleDateString('en-GB');

  constructor( public chatService: ChatService ) {
    this.chatService.loadMessages().subscribe( () => {
      setTimeout( () => {
        this.element.scrollTop = this.element.scrollHeight;
      }, 50);
    });
  }

  ngOnInit() {
    this.element = document.getElementById('app-messages');
  }

  sendMessage() {
    // console.log( this.message );
    if ( this.message.length === 0) {
      return;
    }

    this.chatService.addMessage( this.message )
      .then( () => this.message = '')
      .catch( (err) => console.error('Erros trying to send', err));
  }

}
