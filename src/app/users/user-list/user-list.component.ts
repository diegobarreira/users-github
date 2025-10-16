import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../interface/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent implements OnInit {
  listedUsers!: User[];
  displayedColumns: string[] = ['login'];
  constructor(public userService: UsersService) {}

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    this.userService
      .getUsers()
      .subscribe((users) => (this.listedUsers = users));
  }
}
