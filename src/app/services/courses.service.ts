import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http:HttpClient) {   
      console.log("services");
  }


 /* loadEmployees():Observable<Employee[]>{
    const params=new HttpParams()
    //.set("page","1")
   // .set("pagesize","43");
    return this.http.get<Employee[]> ("api/courses");
  }*/


  loadCourses():Observable<Course[]>{
    const params=new HttpParams()
    .set("page","1")
    .set("pagesize","43");
    return this.http.get<Course[]> ("api/courses",{params});
  }
  savecourse(course:Course)
  {
    console.log("Clicked From The Service");
    const headers=new HttpHeaders()
    .set("X-Auth","userId");
    return this.http.put('/api/courses/'+course.id,course,{headers});
    
  }
}
