import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IResponse } from "../../shared/models/response";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  ResponseInfo: IResponse = <IResponse>{};
  apiAddress: string = "http://188.34.206.214:88/api/v1/";

  constructor(private http: HttpClient) {}

  get(url: string) {
    return this.http.get<IResponse>(this.apiAddress + url);
  }

  post(url: string, body: object) {
    return this.http.post<IResponse>(this.apiAddress + url, body);
  }

  delete(url: string) {
    return this.http.delete(this.apiAddress + url);
  }

  put(url: string, body: object) {
    return this.http.put(this.apiAddress + url, body);
  }

  

}