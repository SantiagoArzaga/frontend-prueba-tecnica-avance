import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf, NgFor],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.checkLogin();
  }

  checkLogin() {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
    this.checkLogin();

    // 🔹 forzamos actualización de home
    this.router.navigate(['/home']).then(() => {
      window.location.reload();
    });
  }
}
