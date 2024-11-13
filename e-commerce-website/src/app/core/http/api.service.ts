import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get(endUrl: string, responseType:any): Observable<any>{
    return this.http.get(environment.serverUrl + endUrl, {observe: 'response', responseType: responseType})
  }

  post(endUrl: string, reqObj:any, responseType:any): Observable<any>{
    return this.http.post(environment.serverUrl + endUrl, reqObj, {observe: 'response', responseType: responseType})
  }

  put(endUrl: string, reqObj:any, responseType:any): Observable<any>{
    return this.http.put(environment.serverUrl + endUrl, reqObj, {observe: 'response', responseType: responseType})
  }

  delete(endUrl: string, responseType: any): Observable<any>{
    return this.http.delete(environment.serverUrl + endUrl, { observe: 'response', responseType: responseType });
  }

  

}
