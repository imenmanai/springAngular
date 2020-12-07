import { User } from './../model/User';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class LoginService {

   // BASE_PATH: 'http://localhost:8080'

   USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
public nom : String;
public prenom : String;
   public username: String;
   public password: String;
  URL="http://localhost:8080/springboot-crud-rest/api/auth/";
   constructor(private http: HttpClient) {

   }
   login(credentials): Observable<any> {
    return this.http.post("http://localhost:8080/springboot-crud-rest/api/auth/signin", {
      username: credentials.username,
      password: credentials.password,
    }, httpOptions);
  }
   createBasicAuthToken(username: String, password: String) {
     return 'Basic ' + window.btoa(username + ":" + password);
   }

   register(user: User): Observable<any> {
    return this.http.post("http://localhost:8080/springboot-crud-rest/api/auth/signup", {
      username: user.username,
      email: user.email,
      password: user.password,
      nom:user.nom,
      prenom:user.prenom
    }, httpOptions);
  }
}
