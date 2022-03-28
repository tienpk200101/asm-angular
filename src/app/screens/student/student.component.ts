import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: Array<any> = [];
  constructor(private http: HttpClient, private studentService:StudentService) { }

  ngOnInit(): void {
    this.listStudent();
  }

  gender(gn: any){
    if(gn == 'true') {
      return 'Nam';
    } else {
      return 'Nữ'
    }
  }

  listStudent(keyword: string = "") {
    this.studentService.list(keyword).subscribe(data => {
      this.students = data;
    })
  }

  search(e: any) {
    let keyword = e.target.value;
    this.listStudent(keyword);
  }
}
