import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
   apiUrl:string = 'https://api-generator.retool.com/SbAnr6/data'
  user:User[] = []
  constructor(private http:HttpClient) { }

getAllUser():Observable<any>{
  return this.http.get(this.apiUrl)
}

addUser(user :any): Observable<any>{
  return this.http.post(this.apiUrl, user);
}

fetchPaginationData(page: number, limit: number ):Observable<any>{
 return this.http.get(`${this.apiUrl}?_page=${page}?_limit=${limit}`)
}

updateUser(id:number, user:any):Observable<any>{
  return this.http.put(`${this.apiUrl}/${id}`, user);
}

getUserById(id:number):Observable<any>{
  return this.http.get(`${this.apiUrl}/${id}`);
}

deleteUser(id:number):Observable<any>{
  return this.http.delete(`${this.apiUrl}/${id}`)
}

}
