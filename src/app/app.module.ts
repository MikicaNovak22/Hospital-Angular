import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './core/home/home.component';
import { SideBarComponent } from './core/side-bar/side-bar.component';
import { AboutComponent } from './core/about/about.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DoctorslistComponent } from './doctors/doctorslist/doctorslist.component';
import { DoctordetailsComponent } from './doctors/doctordetails/doctordetails.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideBarComponent,
    AboutComponent,
    DoctorsComponent,
    AppointmentComponent,
    DoctorslistComponent,
    DoctordetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
