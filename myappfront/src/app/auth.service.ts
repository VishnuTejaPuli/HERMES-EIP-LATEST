import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/auth'; // Change port if needed

  private loggedIn = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient, private router: Router) {}

  private getAuthHeaders() {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

  private token: string | null = null;

  login(username: string, password: string): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/login`, { username, password })
      .pipe(
        tap((response) => {
          this.token = response.jwt;
          if (this.token) {
            localStorage.setItem('token', this.token);
          } else {
            console.warn('Received null token from authentication');
          }
          this.loggedIn.next(true);
        })
      );
  }

  // signup(username: string, password: string): Observable<any> {
  //   return this.http.post<any>(`${this.baseUrl}/signup`, {
  //     username,
  //     password,
  //   });
  // }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
  getGreeting(): Observable<string> {
    return this.http.get(`${this.apiUrl}/greeting`, { responseType: 'text' });
  }
}
