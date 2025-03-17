import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

// Custom validator function to check forbidden names
export function forbiddenNameValidator(forbiddenPattern: RegExp) {
  return (control: FormControl) => {
    return forbiddenPattern.test(control.value)
      ? { forbiddenName: true }
      : null;
  };
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgClass],
})
export class FormComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          forbiddenNameValidator(/bobs/i),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(8),
          Validators.pattern(/^[1-9]/),
        ],
      ],
    });
  }

  get name() {
    return this.registerForm.get('name');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }

  updateName() {
    this.registerForm.reset();
  }
}
