import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //form trong angular
  // Bắt buộc
  // 1. Formsmodule trong app module
  // 2. Lựa chọn sử dụng loại form nào
  // - template

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', Validators.required)
  });
  constructor() { }

  ngOnInit(): void {
  }

}
