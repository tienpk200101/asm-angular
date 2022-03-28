import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';



@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  code: string = "";
  quizs: Array<any> = [];

  constructor(private http: HttpClient, private router:ActivatedRoute, private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.router.params.subscribe(dsThamSo => {
      this.code = dsThamSo['code'];
    });
    this.http.get<any>(" http://localhost:3000/" + this.code)
      .subscribe(data => {
        this.quizs = data;
    });
  }

}
