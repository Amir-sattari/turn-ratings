import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.scss'
})
export class OtpComponent implements OnInit {
  phoneNumber: string = ''; 
  countdown: number = 50; 
  timer: any;

  ngOnInit(): void {
    this.startTimer();
  }

  startTimer(): void {
    this.timer = setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
      } else {
        clearInterval(this.timer);
      }
    }, 1000); 
  }
}