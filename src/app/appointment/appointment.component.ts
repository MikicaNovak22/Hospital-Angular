import { HourMinute } from './../model/datetime.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HospitalService } from '../service/hospital.service';
import { Doctor } from '../model/doctor.model';
import { NgbDateStruct, NgbCalendar, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Appointment } from '../model/appointment.model'

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  appointmentForm: FormGroup;

  doctorsId;
  doctor: Doctor;

  model: NgbDateStruct;
  date: {year: number, month: number};
  time = {hour: 13, minute: 30};

  constructor(private route: ActivatedRoute, private service: HospitalService, private fb: FormBuilder, private router: Router, private calendar: NgbCalendar) { }

  ngOnInit(): void {
    this.createForm();
    this.doctorsId = this.route.snapshot.params.id;
    this.getDoctor();
    this.selectToday();
  }

  getDoctor(){
    this.service.getOneDoctor(this.doctorsId).subscribe(
      x => { this.doctor = x }
    )
  }

  createForm(){
    this.appointmentForm = this.fb.group({
      name: ['',Validators.required],
      lastName:  ['',Validators.required],
      email:  ['',Validators.required],
      phone: ['',Validators.required]
    })
  }

  onSubmit(){
    let appointment = new Appointment(this.appointmentForm.value);
    appointment.doctorId = this.doctorsId;
    appointment.day = this.model;
    appointment.hour = this.time;

    let date = new NgbDate(this.model.year, this.model.month, this.model.day);
    let day = this.calendar.getWeekday(date);
    let flag = true;

    if( day > 5){
      flag = false;
    } else if(day == 1){
      let hourMinuteMs = (this.doctor.schedule.monday.start).split(":");
      let timeMs = new HourMinute();
      timeMs.hour = Number(hourMinuteMs[0]);
      timeMs.minute = Number(hourMinuteMs[1]);

      let hourMinuteMe = (this.doctor.schedule.monday.end).split(":");
      let timeMe = new HourMinute();
      timeMe.hour = Number(hourMinuteMe[0]);
      timeMe.minute = Number(hourMinuteMe[1]);

      if( (appointment.hour.hour < timeMs.hour || (appointment.hour.hour > timeMe.hour)) ){
        flag = false;
      } else if ( appointment.hour.hour == timeMs.hour){
          if( appointment.hour.minute < timeMs.minute){
            flag = false;
          }
        
      } else if( appointment.hour.hour == timeMe.hour){
        if(appointment.hour.minute > timeMe.minute){
          flag = false;
        }
      }
    } else if( day == 2){
      let hourMinuteMs = (this.doctor.schedule.tuesday.start).split(":");
      let timeMs = new HourMinute();
      timeMs.hour = Number(hourMinuteMs[0]);
      timeMs.minute = Number(hourMinuteMs[1]);

      let hourMinuteMe = (this.doctor.schedule.tuesday.end).split(":");
      let timeMe = new HourMinute();
      timeMe.hour = Number(hourMinuteMe[0]);
      timeMe.minute = Number(hourMinuteMe[1]);

      if( (appointment.hour.hour < timeMs.hour || (appointment.hour.hour > timeMe.hour)) ){
        flag = false;
      } else if ( appointment.hour.hour == timeMs.hour){
          if( appointment.hour.minute < timeMs.minute){
            flag = false;
          }
        
      } else if( appointment.hour.hour == timeMe.hour){
        if(appointment.hour.minute > timeMe.minute){
          flag = false;
        }
      }
    } else if( day == 3){
      let hourMinuteMs = (this.doctor.schedule.wednesday.start).split(":");
      let timeMs = new HourMinute();
      timeMs.hour = Number(hourMinuteMs[0]);
      timeMs.minute = Number(hourMinuteMs[1]);

      let hourMinuteMe = (this.doctor.schedule.wednesday.end).split(":");
      let timeMe = new HourMinute();
      timeMe.hour = Number(hourMinuteMe[0]);
      timeMe.minute = Number(hourMinuteMe[1]);

      if( (appointment.hour.hour < timeMs.hour || (appointment.hour.hour > timeMe.hour)) ){
        flag = false;
      } else if ( appointment.hour.hour == timeMs.hour){
          if( appointment.hour.minute < timeMs.minute){
            flag = false;
          }
        
      } else if( appointment.hour.hour == timeMe.hour){
        if(appointment.hour.minute > timeMe.minute){
          flag = false;
        }
      }
    } else if( day == 4){
      let hourMinuteMs = (this.doctor.schedule.thursday.start).split(":");
      let timeMs = new HourMinute();
      timeMs.hour = Number(hourMinuteMs[0]);
      timeMs.minute = Number(hourMinuteMs[1]);

      let hourMinuteMe = (this.doctor.schedule.thursday.end).split(":");
      let timeMe = new HourMinute();
      timeMe.hour = Number(hourMinuteMe[0]);
      timeMe.minute = Number(hourMinuteMe[1]);

      if( (appointment.hour.hour < timeMs.hour || (appointment.hour.hour > timeMe.hour)) ){
        flag = false;
      } else if ( appointment.hour.hour == timeMs.hour){
          if( appointment.hour.minute < timeMs.minute){
            flag = false;
          }
        
      } else if( appointment.hour.hour == timeMe.hour){
        if(appointment.hour.minute > timeMe.minute){
          flag = false;
        }
      }
    } else if( day == 5){
      let hourMinuteMs = (this.doctor.schedule.friday.start).split(":");
      let timeMs = new HourMinute();
      timeMs.hour = Number(hourMinuteMs[0]);
      timeMs.minute = Number(hourMinuteMs[1]);

      let hourMinuteMe = (this.doctor.schedule.friday.end).split(":");
      let timeMe = new HourMinute();
      timeMe.hour = Number(hourMinuteMe[0]);
      timeMe.minute = Number(hourMinuteMe[1]);

      if( (appointment.hour.hour < timeMs.hour || (appointment.hour.hour > timeMe.hour)) ){
        flag = false;
      } else if ( appointment.hour.hour == timeMs.hour){
          if( appointment.hour.minute < timeMs.minute){
            flag = false;
          }
        
      } else if( appointment.hour.hour == timeMe.hour){
        if(appointment.hour.minute > timeMe.minute){
          flag = false;
        }
      }
    }

    if(flag){
      this.service.postAppointment(appointment).subscribe( 
      x => {
        alert("Uspesno")
      },
      error =>{
        console.log(error)
      }
      )
      this.router.navigate(['/doctors'])
    } else {
      alert("Van radnog vremena")
    }



  }


  selectToday(){
    this.model = this.calendar.getToday();
  }
}
