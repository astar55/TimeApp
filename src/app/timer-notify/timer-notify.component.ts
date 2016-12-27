import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-timer-notify',
  templateUrl: './timer-notify.component.html',
  styleUrls: ['./timer-notify.component.css']
})
export class TimerNotifyComponent implements OnInit {

  timertotal: string;

  constructor(public dialogRef:MdDialogRef<TimerNotifyComponent>) { }

  ngOnInit() {
  }

  setTimerTotal(total: string) {
    this.timertotal = total;
  }

}
