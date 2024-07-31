import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IResponse } from "../../shared/models/response";
import { Observable } from 'rxjs';
import { StorageService } from '../../auth/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  ResponseInfo: IResponse = <IResponse>{};
  apiAddress: string = "http://188.34.206.214:88/api/v1/";
  token: string | null;

  constructor(private http: HttpClient, private storageService: StorageService) {
    this.token = this.storageService.get('token');
  }

  get(url: string): Observable<IResponse> {
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${this.token}`
    });

    return this.http.get<IResponse>(this.apiAddress + url, { headers });
  }

  post(url: string, body: object): Observable<IResponse> {
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${this.token}`
    });
    return this.http.post<IResponse>(this.apiAddress + url, body, { headers });
  }

  delete(url: string): Observable<void> {
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${this.token}`
    });
    return this.http.delete<void>(this.apiAddress + url, { headers });
  }

  put(url: string, body: object): Observable<IResponse> {
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${this.token}`
    });
    return this.http.put<IResponse>(this.apiAddress + url, body, { headers });
  }


  getImage(url: string): Observable<Blob> {
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${this.token}`
    });
    return this.http.get(this.apiAddress + url, { headers, responseType: 'blob' });
  }
}

