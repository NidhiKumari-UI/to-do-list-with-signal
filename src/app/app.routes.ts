import { Routes } from '@angular/router';
import { TodoDetails } from '../app/Components/todo-details/todo-details';
import { Home } from './Components/home/home';

export const routes: Routes = [
    {path: '', component: Home},
    { path: 'details/:id', component: TodoDetails }
];
