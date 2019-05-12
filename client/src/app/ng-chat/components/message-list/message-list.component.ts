import { Component, OnInit } from '@angular/core';
import { Message } from '../../models/message.interface';
import { ChatService } from '../../servicies/chat.service';
import { User } from '../../models/user.interface';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {
  public messages: Message[] = [];
  public users: User[] = [];
  constructor(private chat: ChatService) {}

  ngOnInit() {
    this.chat.getMessages().subscribe(message => this.messages.push(message));
  }
}
