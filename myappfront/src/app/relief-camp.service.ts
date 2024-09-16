import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReliefCamp } from './models/relief-camp.model';

@Injectable({
  providedIn: 'root',
})
export class ReliefCampService {
  private apiUrl = 'http://localhost:8000/api/relief-camps';

  constructor(private http: HttpClient) {}

  getAllReliefCamps(): Observable<ReliefCamp[]> {
    return this.http.get<ReliefCamp[]>(`${this.apiUrl}/getAll`);
  }

  getReliefCampById(id: number): Observable<ReliefCamp> {
    return this.http.get<ReliefCamp>(`${this.apiUrl}/${id}`);
  }

  createReliefCamp(reliefCamp: ReliefCamp): Observable<ReliefCamp> {
    return this.http.post<ReliefCamp>(`${this.apiUrl}/set`, reliefCamp);
  }

  updateReliefCamp(id: number, reliefCamp: ReliefCamp): Observable<ReliefCamp> {
    return this.http.put<ReliefCamp>(
      `${this.apiUrl}/updatecamps/${id}`,
      reliefCamp
    );
  }

  deleteReliefCamp(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deletecamps/${id}`);
  }

  getReliefCampsByName(name: string): Observable<ReliefCamp[]> {
    return this.http.get<ReliefCamp[]>(`${this.apiUrl}/name/${name}`);
  }

  getReliefCampsByLocation(location: string): Observable<ReliefCamp[]> {
    return this.http.get<ReliefCamp[]>(`${this.apiUrl}/location/${location}`);
  }
}
