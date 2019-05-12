import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../servicies/chat.service';
import { User } from '../../models/user.interface';
import { Message } from '../../models/message.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  
  public users: User[] = [];
  constructor(private chat: ChatService) {}

  ngOnInit() {
    this.chat.getUsers().subscribe(user => this.users = user);
  }

}
