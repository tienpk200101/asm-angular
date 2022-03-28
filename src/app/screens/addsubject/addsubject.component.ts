import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-addsubject',
  templateUrl: './addsubject.component.html',
  styleUrls: ['./addsubject.component.css']
})
export class AddsubjectComponent implements OnInit {

  addSubjectForm: FormGroup = new FormGroup({
    Code: new FormControl('', Validators.required),
    Name: new FormControl('', Validators.required),
    Logo: new FormControl('', Validators.required),
  });

  subjectData = {
    Code: "",
    Name: "",
    Logo: ""
  }

  listSubject: Array<any> = [];

  constructor(private subjectService: SubjectService) { }

  ngOnInit(): void {

  }

  addSubject(){
    this.subjectService.add(this.subjectData).subscribe(newSubject => {
      this.listSubject.push(newSubject);
    })
  }

  

}
