import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  user: firebase.default.User;
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.auth.getUserState().subscribe((user) => {
      this.user = user;
    });
  }

  register() {
    this.router.navigate(['/register']);
  }
  login() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.auth.logout();
  }
}
