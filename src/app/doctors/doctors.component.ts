import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../service/hospital.service';
import { Doctor } from '../model/doctor.model';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  parameters = {
    filter : {
      specialty: '',
      name: '',
      lastName: ''
    }
  }

  doctors: Doctor[];
  numberOfDoctors: number;
  specialties: string[];

  isClicked: boolean = false;
  oneDoctor: Doctor;

  constructor(private service: HospitalService) { }

  ngOnInit(): void {
    this.updateDoctors();
    this.getSpecialties();
  }

  updateDoctors(){
    this.service.getAlldoctors(this.parameters).subscribe(
      x => {
        this.doctors = x.results;
        this.numberOfDoctors = x.count;
      }
    )
  }

  getSchedule(id){
    this.isClicked = true;
    this.service.getOneDoctor(id).subscribe(
      x => { 
        this.oneDoctor = x;
      }
    )
  }

  getSpecialties(){
    this.service.getSpecialties().subscribe(
      x => { this.specialties = x }
    )
  }


  changeParams(s: string){
    this.parameters.filter.specialty = s;
    this.updateDoctors();
  }

}
