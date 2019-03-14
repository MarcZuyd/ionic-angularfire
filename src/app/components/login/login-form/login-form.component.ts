import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FirebaseService } from '../../../services/firebase.service';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {

  showDebug = false;

  user: User;
  loginForm: FormGroup;
  validationMessages = {
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'email', message: 'Please enter a valid email address.' },
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 6 characters long.' },
    ]
  };

  constructor(private auth: FirebaseService, private fb: FormBuilder, private loginService: LoginService) {
    this.loginForm = this.fb.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ]))
    });
  }

  ngOnInit() {

  }

  toggleForm() {
    console.log('toggle');
    this.loginService.showLoginForm = false;
  }
  getLoginFormData() {
    this.user = {
      userName: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    };
  }

  login() {
    this.getLoginFormData();
    this.auth.signIn(this.user);
    this.clearForm();
  }

  logOut() {
    this.auth.signOut();
  }

  clearForm() {
    this.loginForm.reset(this.loginForm.value);
    this.loginForm.get('password').setValue('');
    this.loginForm.get('email').setValue('');
  }
}
