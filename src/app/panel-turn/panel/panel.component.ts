import { Component , HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss'
})
export class PanelComponent {
  showSidebar: boolean = true;

  constructor(private router: Router) { }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.showSidebar = window.innerWidth >= 768;
  }

  hideSidebarOnClickOutside() {
    if (this.showSidebar) { 
      this.showSidebar = false;
    }
    this.showSidebar = window.innerWidth >= 768;
  }

  logout() {
    localStorage.removeItem("token");
    this.router.navigate(["/auth/login"]);
  }

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }
  
  
}