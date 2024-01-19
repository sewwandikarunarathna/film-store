import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  hide: boolean = true;
  signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      address: this.formBuilder.group({
        street: [''],
        city: [''],
        country: ['', Validators.required],
      }),
      nickNames: this.formBuilder.array([this.formBuilder.control('')]),
    });
  }

  onRegister() {
    if (!this.signupForm.valid) {
      return;
    }
    console.log(this.signupForm.value);
    this.authService.setFormData(this.signupForm.value);

    this.router.navigate(['/main/profile']);
  }

  get nickNames() {
    return this.signupForm.get('nickNames') as FormArray;
  }

  addNickName() {
    console.log(this.nickNames);
    this.nickNames.push(this.formBuilder.control(''));
  }

  removeNickName(i:number){
    this.nickNames.removeAt(i);
  }

}
