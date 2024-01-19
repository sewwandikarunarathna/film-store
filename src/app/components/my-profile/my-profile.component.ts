import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.scss'
})
export class MyProfileComponent implements OnInit {
  hide: boolean = true;
profileData: any;
  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.formData$.subscribe((formData) => {
      this.profileData = formData;
      this.profileForm.patchValue(formData);

      formData.nickNames.forEach((nickName: any) => {
        this.addNickName(nickName);
      });
    });

  
  }

  profileForm: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      country: ['', Validators.required],
    }),
    nickNames: this.formBuilder.array([]),
  })


  onRegister() {
    if (!this.profileForm.valid) {
      return;
    }
    console.log(this.profileForm.value);
    this.router.navigate(['main']);
  }

  get nickNames(): FormArray {
    return this.profileForm.get('nickNames') as FormArray;
  }

  // Method to add a new nickName control to the form array
  addNickName(value: string = ''): void {
    this.nickNames.push(this.formBuilder.control(value));
  }

  removeNickName(i:number){
    this.nickNames.removeAt(i);
  }
}
