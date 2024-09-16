export interface IncidentReportAnonymous {
  id?: number;
  reportId: string;
  reportCode: number;
  typeOfIncident?: string;
  descriptionOfIncident?: string;
  timeOfIncident?: string;
  location?: string;
  status?: string;
  message?: string;
}
