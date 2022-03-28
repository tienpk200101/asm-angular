import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
  addStudentForm: FormGroup = new FormGroup({
    fullname: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    gender: new FormControl('', Validators.required),
    birthdate: new FormControl(new Date, Validators.required)
  })

  constructor() { }

  ngOnInit(): void {
  }

}
