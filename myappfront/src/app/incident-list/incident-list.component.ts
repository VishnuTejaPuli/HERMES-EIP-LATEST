import { Component, OnInit } from '@angular/core';
import { IncidentReportCommonService } from '../incident-report-common.service';
import { Incident } from '../models/incident.model';

@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.css'],
})
export class IncidentListComponent implements OnInit {
  incidents: Incident[] = [];

  constructor(private incidentService: IncidentReportCommonService) {}

  ngOnInit(): void {
    this.loadIncidents();
  }

  loadIncidents(): void {
    this.incidentService.getAllIncidents().subscribe((data) => {
      this.incidents = data;
    });
  }

  deleteIncident(id: number): void {
    this.incidentService.deleteIncident(id).subscribe(() => {
      this.loadIncidents();
    });
  }
}
