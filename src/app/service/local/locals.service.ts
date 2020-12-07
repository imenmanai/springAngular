import { Local } from './../../model/Local';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LocalsService {
  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/local/locals';
  private baseUrl1 = 'http://localhost:8080/springboot-crud-rest/api/local/locals/user';

  constructor(private http: HttpClient) { }


  createLocal(local: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, local);
  }

  getLocalList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  getLocalUser(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl1}/${id}`);
  }
  getLocalDetail(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  deleteLocal(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  update(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
}
