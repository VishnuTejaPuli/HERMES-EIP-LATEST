import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SupportService {
  private apiUrl = `http://localhost:8000/api/helplines`;

  constructor(private http: HttpClient) {}

  getAllHelplineNumbers(): Observable<any[]> {
    const region = 'National';
    return this.http.get<any[]>(`${this.apiUrl}/numbers/region`, {
      params: { region },
    });
  }

  getAllHelplineWebsites(): Observable<any[]> {
    const region = 'National';
    return this.http.get<any[]>(`${this.apiUrl}/websites/region`, {
      params: { region },
    });
  }

  searchHelplineNumbersByName(name: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/numbers/search`, {
      params: { name },
    });
  }

  searchHelplineNumbersByRegion(region: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/numbers/region`, {
      params: { region },
    });
  }

  searchHelplineWebsitesByName(name: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/websites/search`, {
      params: { name },
    });
  }

  searchHelplineWebsitesByRegion(region: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/websites/region`, {
      params: { region },
    });
  }
}
