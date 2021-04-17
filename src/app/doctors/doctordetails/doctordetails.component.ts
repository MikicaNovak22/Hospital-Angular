import { Component, OnInit, Input } from '@angular/core';
import { Doctor } from 'src/app/model/doctor.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctordetails',
  templateUrl: './doctordetails.component.html',
  styleUrls: ['./doctordetails.component.css']
})
export class DoctordetailsComponent implements OnInit {

  @Input() doctor: Doctor;

  @Input() flag: boolean;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
