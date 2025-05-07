import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  user: User = { username: '', email: '', password: '' };

  constructor(private router: Router) {}

  register() {
    localStorage.setItem('user', JSON.stringify(this.user));
    alert('Registered successfully!');
    this.router.navigate(['/login']);
  }
}
