import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  user: User | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    const userData = localStorage.getItem('loggedInUser');
    this.user = userData ? JSON.parse(userData) : null;
    if (!this.user) {
      this.router.navigate(['/login']);
    }
  }

  logout() {
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/login']);
  }
}
