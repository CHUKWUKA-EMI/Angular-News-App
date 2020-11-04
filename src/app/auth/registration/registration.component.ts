import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  authError: any;
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.auth.eventAuthError$.subscribe((data) => {
      this.authError = data;
    });
  }

  createUser(frm) {
    this.auth.createUser(frm.value);
  }

  login() {
    this.router.navigate(['/login']);
  }
}
