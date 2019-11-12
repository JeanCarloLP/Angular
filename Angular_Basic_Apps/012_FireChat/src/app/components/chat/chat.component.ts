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

  constructor( public chatService: ChatService ) {
    this.chatService.loadMessages().subscribe( (messages: any[]) => {
      console.log( messages );
    });
  }

  ngOnInit() {
  }

  sendMessage() {
    console.log( this.message );
  }

}
