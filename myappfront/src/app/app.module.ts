import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { NaturalDisastersComponent } from './natural-disasters/natural-disasters.component';
import { AccidentsComponent } from './accidents/accidents.component';
import { WomensafetyComponent } from './womensafety/womensafety.component';
import { ChildsafetyComponent } from './childsafety/childsafety.component';
import { HelplineComponent } from './helpline/helpline.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { WeatherComponent } from './weather/weather.component';
import { SosComponent } from './sos/sos.component';
import { FormsModule } from '@angular/forms';
import { NdFormComponent } from './nd-form/nd-form.component';
import { WAlertComponent } from './w-alert/w-alert.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MapComponent } from './map/map.component';
import { LiveMapComponent } from './live-map/live-map.component';
import { LoginComponent } from './login/login.component';
import { AdmindbComponent } from './admindb/admindb.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { AddHelplineComponent } from './add-helpline/add-helpline.component';
import { IncidentReportCommonComponent } from './incident-report-common/incident-report-common.component';
import { IncidentListComponent } from './incident-list/incident-list.component';
import { IncidentReportAnonymousComponent } from './incident-report-anonymous/incident-report-anonymous.component';
import { ReliefCampSearchComponent } from './relief-camp-search/relief-camp-search.component';
import { ReliefCampManagerComponent } from './relief-camp-manager/relief-camp-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    NaturalDisastersComponent,
    AccidentsComponent,
    WomensafetyComponent,
    ChildsafetyComponent,
    HelplineComponent,
    SidenavComponent,
    DashboardComponent,
    AboutComponent,
    WeatherComponent,
    SosComponent,
    NdFormComponent,
    WAlertComponent,
    MapComponent,
    LiveMapComponent,
    LoginComponent,
    AdmindbComponent,
    HeaderComponent,
    FooterComponent,
    NavbarAdminComponent,
    AddHelplineComponent,
    IncidentReportCommonComponent,
    IncidentListComponent,
    IncidentReportAnonymousComponent,
    ReliefCampSearchComponent,
    ReliefCampManagerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
