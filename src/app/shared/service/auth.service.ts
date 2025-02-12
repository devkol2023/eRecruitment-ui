import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new BehaviorSubject<any>(null); // Tracks logged-in user
  private isLoggedInSubject = new BehaviorSubject<boolean>(false); // Tracks login state

  constructor() {
    this.loadUserFromLocalStorage();
  }

  // Load user from localStorage when app starts
  private loadUserFromLocalStorage() {
    const storedUser = sessionStorage.getItem('loggedInUser');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      this.userSubject.next(user);
      this.isLoggedInSubject.next(true);
    }
  }

  // Login user and store in localStorage
  login(user: any): void {
    sessionStorage.setItem('loggedInUser', JSON.stringify(user));
    this.userSubject.next(user);
    this.isLoggedInSubject.next(true);
  }

  // Logout user and remove from localStorage
  logout(): void {
    sessionStorage.removeItem('loggedInUser');
    this.userSubject.next(null);
    this.isLoggedInSubject.next(false);
  }

  // Get current user as Observable (for real-time UI updates)
  getUser(): Observable<any> {
    return this.userSubject.asObservable();
  }

  // Get login status as Observable
  isLoggedIn(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }

  // Get the current user object (not Observable)
  getCurrentUser(): any {
    return this.userSubject.getValue();
  }
}
