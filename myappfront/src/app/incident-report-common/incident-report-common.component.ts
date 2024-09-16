import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IncidentReportCommonService } from '../incident-report-common.service';
import { Incident } from '../models/incident.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incident-report-common',
  templateUrl: './incident-report-common.component.html',
  styleUrls: ['./incident-report-common.component.css'],
})
export class IncidentReportCommonComponent implements OnInit {
  incidentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private incidentService: IncidentReportCommonService,
    private router: Router
  ) {
    this.incidentForm = this.fb.group({
      incidentType: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
        ],
      ],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(500),
        ],
      ],
      numberOfPeopleStuck: [0, Validators.min(0)],
      resourcesRequired: [''],
      location: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.incidentForm.valid) {
      const newIncident: Incident = this.incidentForm.value;
      this.incidentService.reportIncident(newIncident).subscribe(
        () => {
          alert('Incident reported successfully!, you will get help  soon');
          this.router.navigate(['/incidents']);
        },
        (error: { message: string }) => {
          alert('Error reporting the incident: ' + error.message);
        }
      );
    }
  }
}
