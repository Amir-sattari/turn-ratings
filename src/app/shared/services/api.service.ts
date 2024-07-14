import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiAddress: string = 'http://188.34.206.214:88/api';
  
  constructor() { }
}
