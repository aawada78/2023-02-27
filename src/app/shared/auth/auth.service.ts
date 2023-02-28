import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userName = '';

  constructor() {}

  login() {
    this.userName = 'Assaad';
  }

  logout() {
    this.userName = '';
  }
}
