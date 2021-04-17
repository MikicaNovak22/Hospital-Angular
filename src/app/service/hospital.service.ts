import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { DoctorList, Doctor } from '../model/doctor.model';
import { Appointment } from '../model/appointment.model';

const url = "http://localhost:3000/api/doctors";
const specialitiesUrl = "http://localhost:3000/api/specialties";
const appointmentUrl = "http://localhost:3000/api/appointments";

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private http: HttpClient) { }

  getAlldoctors(parameters?:any):Observable<DoctorList>{
    let queryParams = {};

    if(parameters){
      queryParams = {
        params: new HttpParams()
        .set("filter", JSON.stringify(parameters.filter) || "")
      }
    }

    return this.http.get(url,queryParams).pipe(map(
      elem => { return new DoctorList(elem)}
    ))
  }


  getOneDoctor(id:number):Observable<Doctor>{
    return this.http.get(url + "/" + id).pipe(map(
      x => { return new Doctor(x)}
    ))
  }

  getSpecialties():Observable<any>{
    return this.http.get(specialitiesUrl).pipe(map(
      elem => { return elem}
    ))
  }

  postAppointment(newAppointment: Appointment):Observable<Appointment>{
    return this.http.post(appointmentUrl, newAppointment).pipe(map(
      x=> { return new Appointment(x)}
    ))
  }
}
