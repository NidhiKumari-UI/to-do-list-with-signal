import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';import { CommonModule } from '@angular/common';
import { ApiCall } from '../../Services/api-call';
import { User } from '../../user.model';

@Component({
  selector: 'app-form-component',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-component.html',
  styleUrl: './form-component.css'
})
export class FormComponent {
  myForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
  });

  constructor(private apicall: ApiCall) {}

  onSubmit(): void {
    if(this.myForm.valid) {
      const formdata = this.myForm.value as User;

      this.apicall.SaveUser(formdata).subscribe({
        next: (res) => {
          alert("Data saved successfully");
          console.log("Response from API: ", res);

          // Add new User to the Local List and Update Service
          const updatedUsers = [...this.apicall.getCurrentUsers(), res];
          this.apicall.updateUsersList(updatedUsers);
          this.myForm.reset();
        },
        error: (err) => {
          alert("Not saved Successfully");
        }
      });
    }
  }
}
