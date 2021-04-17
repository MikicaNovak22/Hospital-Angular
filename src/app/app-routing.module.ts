import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './appointment/appointment.component';
import { AboutComponent } from './core/about/about.component';
import { HomeComponent } from './core/home/home.component';
import { DoctorsComponent } from './doctors/doctors.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "doctors", component: DoctorsComponent},
  { path: "about", component: AboutComponent },
  { path: "appointment/:id", component: AppointmentComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
