import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OtpService {

  constructor() { }

  userPhoneNumber!: string; 
  otpCode!: string; 
}
