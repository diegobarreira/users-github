import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './interface/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private userUrl = 'https://api.github.com/users';
  
  constructor(public http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.userUrl);
  }
}
