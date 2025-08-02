import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { selectUserById, selectUsers } from '../../state/user.selectors';
import { loadUsers } from '../../state/user.actions';
import { User } from '../../user.model';
import { AsyncPipe } from '@angular/common';
import {JsonPipe} from '@angular/common'

@Component({
  selector: 'app-todo-details',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './todo-details.html',
  styleUrl: './todo-details.css'
})
export class TodoDetails implements OnInit {
  user$!: Observable<User | undefined>;
  loading$!: Observable<boolean>;
  allUsers$!: Observable<any>; // Declare without initialization


  constructor(private store: Store<{ user: any }>, private route: ActivatedRoute) {}

  ngOnInit() {
    this.loading$ = this.store.select(state => state.user.loading);
    this.allUsers$ = this.store.select(selectUsers); // Initialize here after store is available
    this.store.dispatch(loadUsers());
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.user$ = this.store.select(selectUserById(id));
    });
  }
}