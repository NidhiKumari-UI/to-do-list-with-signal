import { Component } from '@angular/core';
import { TableComponent } from '../table-component/table-component';
import { FormComponent } from '../form-component/form-component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TableComponent, FormComponent,CommonModule ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
