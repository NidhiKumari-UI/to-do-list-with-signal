import { Injectable, Signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiCall {
  private apiUrl: string = "http://130.162.46.52:7001/todo";
 usersSignal!: Signal<User[]>;
 

  constructor(private http: HttpClient) { 
  //Get Method to get the Users Details
    this.initUsersSignal();
  }

  //making the Api call to get the Users 
  initUsersSignal() {
    this.usersSignal = toSignal(this.http.get<User[]>(this.apiUrl), {initialValue: []})
  }
  
    //delete users 
   deleteUser(userId: number): Observable<any>{
     return this.http.delete(`${this.apiUrl}?id=${userId}`);
   }

    //Post Method to Create a new User
    CreateUser(user: User): Observable<User[]> {
      return this.http.post<User[]>(this.apiUrl, user);
    }
  }

 

