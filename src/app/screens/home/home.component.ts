import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  subjects: Array<any> = [];

  constructor(private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.listSubject();
  }

  listSubject(keyword: string = "") {
    this.subjectService.list(keyword).subscribe(data => {
      this.subjects = data;
    });
  }

  search(e: any) {
    let keyword = e.target.value;
    this.listSubject(keyword)
    
  }



}
