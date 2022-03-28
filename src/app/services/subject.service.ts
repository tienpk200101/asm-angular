import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { }

  list(keyword: string = ""): Observable<any>{
    return this.http.get<any>(`${environment.subject_api}?Name_like=${keyword}`);
  }

  add(data: any): Observable<any>{
    return this.http.post<any>(environment.subject_api, {...data});
  }

  delete(data: any): Observable<any>{
    return this.http.delete<any>(environment.subject_api, {...data});
  }

}
