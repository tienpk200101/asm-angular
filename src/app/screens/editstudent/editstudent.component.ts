import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent implements OnInit {
  id: string = "";
  student: Array<any> = [];

  editStudentForm: FormGroup = new FormGroup({
    fullname: new FormControl(''),
    email: new FormControl(''),
    gender: new FormControl(''),
    birthdate: new FormControl(new Date)
  });

  constructor(private http: HttpClient, private router:ActivatedRoute, private students: StudentService) { }

  ngOnInit(): void {
    this.router.params.subscribe(dsThamSo => {
      this.id = dsThamSo['id'];
    });
    this.http.get<any>("http://localhost:3000/students/" + this.id)
      .subscribe(data => {
        this.student = data;
      })

  }

}
