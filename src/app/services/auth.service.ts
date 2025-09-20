import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly EMAIL_KEY = 'email';
  private readonly PASSWORD_KEY = 'password';

  login(email: string, password: string): void {
    localStorage.setItem(this.EMAIL_KEY, email);
    localStorage.setItem(this.PASSWORD_KEY, password);
  }

  logout(): void {
    localStorage.removeItem(this.EMAIL_KEY);
    localStorage.removeItem(this.PASSWORD_KEY);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.EMAIL_KEY);
  }

  getUserEmail(): string | null {
    return localStorage.getItem(this.EMAIL_KEY);
  }
}
