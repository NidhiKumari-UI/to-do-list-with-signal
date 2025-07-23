import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../user.model';


@Injectable({
  providedIn: 'root'
})
export class ApiCall {
  private apiUrl: string = "https://jsonplaceholder.typicode.com/users";
  private usersSubject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  users$: Observable<User[]> = this.usersSubject.asObservable();

  //Injecting HttpClient in the constructor
  //to make HTTP requests
  constructor(private http: HttpClient) { }

  //Get Method to get the Users Details
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

   //post method to create a new customer
  SaveUser(userData: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, userData);
  }

  //Method to update the users list
  updateUsersList(users: User[]): void {
    this.usersSubject.next(users);
  }

  getCurrentUsers(): User[] {
    return this.usersSubject.getValue();
  }

  deleteUser(userId: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + userId);
  }

  }

 

