import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editsubject',
  templateUrl: './editsubject.component.html',
  styleUrls: ['./editsubject.component.css']
})
export class EditsubjectComponent implements OnInit {
  id: string = "";
  subject: Array<any> = [];

  editSubjectForm: FormGroup = new FormGroup({
    Code: new FormControl('', Validators.required),
    Name: new FormControl('', Validators.required),
    Logo: new FormControl('', Validators.required),
  })
  constructor(private http: HttpClient, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(thamso => {
      this.id = thamso['id'];
    })
    this.http.get<any>("http://localhost:3000/subjects/" + this.id)
      .subscribe(data => {
        this.subject = data;
      })
  }

}
