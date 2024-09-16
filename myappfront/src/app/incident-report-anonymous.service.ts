import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IncidentReportAnonymous } from './models/incident-report-anonymous.model';

@Injectable({
  providedIn: 'root',
})
export class IncidentReportAnonymousService {
  private baseUrl = 'http://localhost:8000/api/reports';

  constructor(private http: HttpClient) {}

  getAllReports(): Observable<IncidentReportAnonymous[]> {
    return this.http.get<IncidentReportAnonymous[]>(`${this.baseUrl}/getAll`);
  }

  getReportById(id: number): Observable<IncidentReportAnonymous> {
    return this.http.get<IncidentReportAnonymous>(`${this.baseUrl}/${id}`);
  }

  getReportByReportIdAndReportCode(
    reportId: string,
    reportCode: string
  ): Observable<IncidentReportAnonymous> {
    return this.http.get<IncidentReportAnonymous>(
      `${this.baseUrl}/find?reportId=${reportId}&reportCode=${reportCode}`
    );
  }

  createReport(
    report: IncidentReportAnonymous
  ): Observable<IncidentReportAnonymous> {
    return this.http.post<IncidentReportAnonymous>(`${this.baseUrl}`, report);
  }

  updateReport(
    id: number,
    report: IncidentReportAnonymous
  ): Observable<IncidentReportAnonymous> {
    return this.http.put<IncidentReportAnonymous>(
      `${this.baseUrl}/${id}`,
      report
    );
  }

  patchStatus(id: number, status: string): Observable<IncidentReportAnonymous> {
    return this.http.patch<IncidentReportAnonymous>(
      `${this.baseUrl}/${id}/status?status=${status}`,
      null
    );
  }

  patchMessage(
    id: number,
    message: string
  ): Observable<IncidentReportAnonymous> {
    return this.http.patch<IncidentReportAnonymous>(
      `${this.baseUrl}/${id}/message?message=${message}`,
      null
    );
  }

  deleteReport(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
