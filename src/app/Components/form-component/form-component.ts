import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-form-component',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-component.html',
  styleUrl: './form-component.css'
})
export class FormComponent {
  myForm = new FormGroup({
    discription: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required)
  })

  onSubmit() {
    console.log(this.myForm.value);
  }
}
