import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { FormComponent } from './Components/form-component/form-component';
import { TableComponent } from './Components/table-component/table-component';

@Component({
  selector: 'app-root',
  imports: [FormComponent, TableComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('toDoList');
}
