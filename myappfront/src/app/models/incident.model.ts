export interface Incident {
  id?: number;
  incidentType: string;
  description: string;
  timeOfIncident?: string;
  numberOfPeopleStuck?: number;
  resourcesRequired?: string;
  location: string;
}
