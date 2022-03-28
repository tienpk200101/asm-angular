import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  subjects: Array<any> = [];

  constructor(private http: HttpClient, private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.listSubject();
  }


  listSubject(keyword: string = "") {
    this.subjectService.list(keyword).subscribe(data => {
      this.subjects = data;
    })
  }

  search(e: any) {
    let keyword = e.target.value;
    this.listSubject(keyword);
  }

  // deleteSubject(){
  //   this.subjectService.delete(this.subjectData).subscribe(data => {
  //     this.listSubject = data;
  //   })
  // }

}
