import { Component, OnInit, signal } from '@angular/core';
import {ApiCall} from '../../Services/api-call'
import { HttpClientModule } from '@angular/common/http';
import { User } from '../../user.model';


@Component({
  selector: 'app-table-component',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './table-component.html',
  styleUrl: './table-component.css'
})
export class TableComponent implements OnInit{
  constructor(private apicall: ApiCall) {}
 userList = signal<User[]>([]);
 

 getAllUsers() {
  this.apicall.getUsers().subscribe({
    next: (res: User[]) => {
      this.userList.set(res);
      console.log("Users data for testing: ", this.userList())
    }
  })
 }

 ngOnInit() {
  this.getAllUsers();
    this.apicall.users$.subscribe({
      next: (users: User[]) => {
        this.userList.set(users);
        console.log("Users data from BehaviorSubject: ", this.userList())
      }
    });
 }
}
