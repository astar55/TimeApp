import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { TimerServiceService } from '../timer-service.service';

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

  saveTimer(mintime: string, sectime:string) {
    if((mintime.length !== 0 || mintime.trim().length !== 0) &&
    (sectime.length !== 0 || sectime.trim().length !== 0) && !(+mintime === 0 && +sectime === 0)){
      if ((+mintime >= 0 && +mintime <= 59) && (+sectime >= 0 && +sectime <= 59)){
        if (+mintime >= 0 && +mintime <= 9 && mintime.length < 2){
          mintime = "0"+mintime;
        }
        if (+sectime >=0 && +sectime <=9 && sectime.length < 2){
          sectime = "0"+sectime;
        }
        let timer = {minute: mintime, second: sectime, total: (1000*+sectime)+(1000*60*+mintime)}
        this.timerServiceService.setTimer(timer);
        this.dialogRef.close("save");
      }
    } else {
      this.error = "Invalid Input!";
    }
  }

}
