import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor( public chatService: ChatService ) { }

  ngOnInit() {
  }

  access( account: string) {
    // console.log( account );
    this.chatService.login( account );
  }

}
