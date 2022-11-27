import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './signup.model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  url= "http://localhost:3300/users"

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.url)
  }

  getUserById(user_id:number): Observable<User[]>{
    return this.http.get<User[]>(this.url + "/" + user_id);
  }

  postUser(user: User){
    const requestOptions: Object = {
      /* other options here */
      responseType: 'text'
    }
    return this.http.post(this.url,user,requestOptions);
  }
}
