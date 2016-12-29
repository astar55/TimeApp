import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { TimerServiceService } from '../../timer-service.service';

@Component({
  selector: 'app-timer-dialog',
  templateUrl: './timer-dialog.component.html',
  styleUrls: ['./timer-dialog.component.css']
})
export class TimerDialogComponent implements OnInit {
  error: string;

  constructor(public dialogRef:MdDialogRef<TimerDialogComponent>,
  private timerServiceService:TimerServiceService) { }

  ngOnInit() {
  }

  saveTimer(hrtime: string, mintime: string, sectime:string, name = "Alarm") {
    name = name.trim().length == 0 ? "Alarm" : name;
    if((hrtime.length !== 0 || hrtime.trim().length !== 0) &&
      (mintime.length !== 0 || mintime.trim().length !== 0) &&
      (sectime.length !== 0 || sectime.trim().length !== 0) && 
      !(+hrtime === 0 && +mintime === 0 && +sectime === 0)) {
      if ((+hrtime >= 0 && +hrtime <= 99) && (+mintime >= 0 && +mintime <= 59) && (+sectime >= 0 && +sectime <= 59)){
        if (+hrtime >= 0 && +hrtime <= 9 && hrtime.length < 2) {
          hrtime = "0"+hrtime;
        }
        if (+mintime >= 0 && +mintime <= 9 && mintime.length < 2){
          mintime = "0"+mintime;
        }
        if (+sectime >=0 && +sectime <=9 && sectime.length < 2){
          sectime = "0"+sectime;
        }
        let timer = {name: name, hour: hrtime, minute: mintime, second: sectime, total: (1000*+sectime)+(1000*60*+mintime)+(1000*60*60*+hrtime)}
        this.timerServiceService.setTimer(timer);
        this.dialogRef.close("save");
      }
    } else {
      this.error = "Invalid Input!";
    }
  }

}
