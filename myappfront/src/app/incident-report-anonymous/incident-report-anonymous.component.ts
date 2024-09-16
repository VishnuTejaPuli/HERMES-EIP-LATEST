import { Component, OnInit } from '@angular/core';
import { IncidentReportAnonymousService } from '../incident-report-anonymous.service';
import { IncidentReportAnonymous } from '../models/incident-report-anonymous.model';

@Component({
  selector: 'app-incident-report-anonymous',
  templateUrl: './incident-report-anonymous.component.html',
  styleUrls: ['./incident-report-anonymous.component.css'],
})
export class IncidentReportAnonymousComponent implements OnInit {
  reports: IncidentReportAnonymous[] = [];
  newReport: IncidentReportAnonymous = {
    reportId: '',
    reportCode: 0,
    typeOfIncident: '',
    descriptionOfIncident: '',
    timeOfIncident: '',
    location: '',
  };
  retrievedReport: IncidentReportAnonymous | null = null;
  searchReportId: string = '';
  searchReportCode: string | null = null;

  constructor(private incidentReportService: IncidentReportAnonymousService) {}

  ngOnInit(): void {
    // Optionally, you can implement this method if you need any initialization logic
  }

  addReport(): void {
    this.incidentReportService.createReport(this.newReport).subscribe(
      (data) => {
        this.reports.push(data);
        this.newReport = {
          reportId: '',
          reportCode: 0,
          typeOfIncident: '',
          descriptionOfIncident: '',
          timeOfIncident: '',
          location: '',
        }; // Reset form
        alert(
          'Incident reported successfully, to know updates please search for ReportId and ReportCode  '
        );
      },
      (error) => {
        console.error('Error creating report', error);
      }
    );
  }

  searchReport(): void {
    if (this.searchReportId && this.searchReportCode) {
      this.incidentReportService
        .getReportByReportIdAndReportCode(
          this.searchReportId,
          this.searchReportCode
        )
        .subscribe(
          (data) => {
            this.retrievedReport = data;
          },
          (error) => {
            console.error('Error retrieving report', error);
            this.retrievedReport = null; // Reset if not found
          }
        );
    }
  }
}
