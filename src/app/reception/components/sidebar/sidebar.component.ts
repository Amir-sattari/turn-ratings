import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {

  firstName: string = '';
  lastName: string = '';

  constructor(private router: Router , private userService: UserService ) { }


  ngOnInit() {
    this.userService.user$.subscribe(user => {
      if (user) {
        this.firstName = user.firstName;
        this.lastName = user.lastName;
      }
    });
  }

  logout() {
    localStorage.removeItem("token");
    this.userService.clearUser();  
    this.router.navigate(["/auth/login"]);
  }
}
