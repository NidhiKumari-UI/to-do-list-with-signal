import { Component,computed,signal,Signal} from '@angular/core';
import {ApiCall} from '../../Services/api-call'
import { HttpClientModule } from '@angular/common/http';
import { User } from '../../user.model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-table-component',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './table-component.html',
  styleUrl: './table-component.css'
})
export class TableComponent {
  users: Signal<User[]>;
  searchItem = signal('');

  constructor(private apicall: ApiCall, private router: Router) {
    //get call 
    this.users = this.apicall.usersSignal;
  }

  filteredUsers = computed(() => {
    const term = this.searchItem().toLowerCase().trim();
    if(!term) return this.users();
    return this.users().filter(user => 
      user.title.toLowerCase().includes(term) || 
      user.description.toLowerCase().includes(term)
    );
  });

 Delete(userId?: number) {
  if(userId) {
    this.apicall.deleteUser(userId).subscribe({
      next: (res) => {
        this.reload();
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

  //Routing
  viewDetails(id?: number) {
    this.router.navigate(['/details', id]);

  }

}



