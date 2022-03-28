import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { LoginComponent } from './screens/login/login.component';
import { HomeComponent } from './screens/home/home.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentComponent } from './screens/student/student.component';
import { QuizComponent } from './screens/quiz/quiz.component';
import { RegisterComponent } from './screens/register/register.component';
import { AddstudentComponent } from './screens/addstudent/addstudent.component';
import { EditstudentComponent } from './screens/editstudent/editstudent.component';
import { SubjectComponent } from './screens/subject/subject.component';
import { AddsubjectComponent } from './screens/addsubject/addsubject.component';
import { EditsubjectComponent } from './screens/editsubject/editsubject.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminLayoutComponent,
    HomeLayoutComponent,
    StudentComponent,
    QuizComponent,
    RegisterComponent,
    AddstudentComponent,
    EditstudentComponent,
    SubjectComponent,
    AddsubjectComponent,
    EditsubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
