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
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    addedOn: new FormControl(new Date().toISOString(), Validators.required)
  });

  constructor(private apicall: ApiCall) {}

  onSubmit(): void {
    if(this.myForm.valid) {
      const newUser: User = {
        title: this.myForm.value.title || '',
        description: this.myForm.value.description || '',
        addedOn: new Date().toISOString() 
      };

      this.apicall.CreateUser(newUser).subscribe({
        next: (res) => {
          console.log('cretaed User Resposne:', res);
          alert("User created successfully");
          this.myForm.reset();
          this.reload();
        },
        error: (err) => {
          console.error('Error creating user:', err);
          alert("Failed to create user");
        }
      });
      
    }
  }
  reload() {
    window.location.reload();
  }
}
