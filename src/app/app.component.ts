import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor (private toastr: ToastrService){
    // this.toastr.success('Hello world!', 'Toastr fun!');
  }

  title = 'turn-ratings';
}
