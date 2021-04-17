import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Doctor } from 'src/app/model/doctor.model';

@Component({
  selector: 'app-doctorslist',
  templateUrl: './doctorslist.component.html',
  styleUrls: ['./doctorslist.component.css']
})
export class DoctorslistComponent implements OnInit {

  @Input() doctors: Doctor[];

  isClicked: boolean = false;

  @Output() newItemEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }


  show(doctorsId:number){
    this.newItemEvent.emit(doctorsId);
  }

}
