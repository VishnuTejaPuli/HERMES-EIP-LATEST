import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Incident } from './models/incident.model';

@Injectable({
  providedIn: 'root',
})
export class IncidentReportCommonService {
  private baseUrl = 'http://localhost:8000/api/incidents'; // Adjust the URL as needed

  constructor(private http: HttpClient) {}

  getAllIncidents(): Observable<Incident[]> {
    return this.http.get<Incident[]>(`${this.baseUrl}/getAll`);
  }

  getIncidentsByType(incidentType: string): Observable<Incident[]> {
    return this.http.get<Incident[]>(`${this.baseUrl}/type/${incidentType}`);
  }

  reportIncident(incident: Incident): Observable<Incident> {
    return this.http.post<Incident>(`${this.baseUrl}/reportincident`, incident);
  }

  updateIncident(id: number, incident: Incident): Observable<Incident> {
    return this.http.put<Incident>(`${this.baseUrl}/${id}`, incident);
  }

  deleteIncident(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
