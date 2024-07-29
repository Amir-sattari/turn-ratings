import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IResponse } from "../../shared/models/response";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  ResponseInfo: IResponse = <IResponse>{};
  apiAddress: string = "http://188.34.206.214:88/api/v1/";
  token = localStorage.getItem('token');

  constructor(private http: HttpClient) { }

  get(url: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get<IResponse>(this.apiAddress + url, {headers});
  }

  post(url: string, body: object) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.post<IResponse>(this.apiAddress + url, body, {headers});
  }

  delete(url: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.delete(this.apiAddress + url, {headers});
  }

  put(url: string, body: object) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.put(this.apiAddress + url, body, {headers});
  }



}