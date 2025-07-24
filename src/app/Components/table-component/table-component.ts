import { Component,Signal} from '@angular/core';
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
export class TableComponent {
  users: Signal<User[]>;

  constructor(private apicall: ApiCall) {
    //get call 
    this.users = this.apicall.usersSignal;
  }

 Delete(userId?: number) {
  if(userId) {
    this.apicall.deleteUser(userId).subscribe({
      next: (res) => {
        console.log("User deleted successfully", res);
        // Refetch Users from API to update the signal
        this.reload();
        console.log("User deleted successfully");
        alert("User deleted successfully");
      },
      error: (error) => {
        console.error("Error deleting user:", error);
        alert("Failed to delete user");
      }

    })
  }
 }
  reload() {
    window.location.reload();
  }

}



