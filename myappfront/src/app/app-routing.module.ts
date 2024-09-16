import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NaturalDisastersComponent } from './natural-disasters/natural-disasters.component';
import { AccidentsComponent } from './accidents/accidents.component';
import { WomensafetyComponent } from './womensafety/womensafety.component';
import { HelplineComponent } from './helpline/helpline.component';
import { ChildsafetyComponent } from './childsafety/childsafety.component';
import { LoginComponent } from './login/login.component';
import { AdmindbComponent } from './admindb/admindb.component';
import { AddHelplineComponent } from './add-helpline/add-helpline.component';
import { IncidentReportCommonComponent } from './incident-report-common/incident-report-common.component';
import { IncidentListComponent } from './incident-list/incident-list.component';
import { IncidentReportAnonymousComponent } from './incident-report-anonymous/incident-report-anonymous.component';
import { ReliefCampSearchComponent } from './relief-camp-search/relief-camp-search.component';
const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'natural-disasters', component: NaturalDisastersComponent },
  { path: 'accidents', component: AccidentsComponent },
  { path: 'womensafety', component: WomensafetyComponent },
  { path: 'childsafety', component: ChildsafetyComponent },
  { path: 'helpline', component: HelplineComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admindb', component: AdmindbComponent },
  { path: 'add-helpline', component: AddHelplineComponent },
  { path: 'report', component: IncidentReportCommonComponent },
  { path: 'incidentlist', component: IncidentListComponent },
  { path: 'anonymous-report', component: IncidentReportAnonymousComponent },
  { path: 'camp-search', component: ReliefCampSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
