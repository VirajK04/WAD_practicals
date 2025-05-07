import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private router: Router) {}

  login() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    if (this.email === user.email && this.password === user.password) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      this.router.navigate(['/profile']);
    } else {
      alert('Invalid credentials');
    }
  }
}
