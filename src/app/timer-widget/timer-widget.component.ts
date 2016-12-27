import { Component, OnInit, EventEmitter } from '@angular/core';
import { MdDialog } from '@angular/material';

import { TimerNotifyComponent } from '../timer-notify/timer-notify.component';

import { TimerServiceService } from '../timer-service.service';

@Component({
  selector: 'app-timer-widget',
  templateUrl: './timer-widget.component.html',
  styleUrls: ['./timer-widget.component.css']
})
export class TimerWidgetComponent implements OnInit {
  totaltime: number;
  totaltimestring: string;
  timeremain: number;
  remaining: string;
  paused: boolean = false;
  started: boolean = true;
  timerwidget: any; 
  close: EventEmitter<any> = new EventEmitter();

  constructor(public dialog: MdDialog,
    private timerServiceService: TimerServiceService) { }

  ngOnInit() {
    this.timeremain = this.totaltime;
    this.calculateRemaining();
    this.totaltimestring = this.remaining;
    this.timerwidget = setInterval(() => {this.decrementTime()}, 1000);
  }

  calculateRemaining() {
    let minutes: string = ((this.timeremain / (60 * 1000)) >> 0) >= 10 ? ((this.timeremain / (60 * 1000)) >> 0).toString() : "0" + ((this.timeremain / (60 * 1000)) >> 0).toString();
    let seconds: string = (((this.timeremain / 1000) % 60) >> 0) >= 10 ? (((this.timeremain / 1000) % 60) >> 0).toString() : "0" + (((this.timeremain / 1000) % 60) >> 0).toString();
    this.remaining =  `${minutes}:${seconds}`;
  }

  pauseTimer(): void {
    clearInterval(this.timerwidget);
    this.paused = !this.paused;
  }

  resumeTimer(): void {
    this.paused = !this.paused;
    this.timerwidget = setInterval(() => {this.decrementTime()}, 1000);
  }

  startTimer(): void {
    this.started = true;
    this.timerwidget = setInterval(() => {this.decrementTime()}, 1000);
  }

  resetTimer(): void {
    clearInterval(this.timerwidget);
    this.paused = false;
    this.started = false;
    this.timeremain = this.totaltime;
    this.calculateRemaining();
  }

  decrementTime(): void {
    if (this.timeremain > 0) {
      this.timeremain -= 1000;
      this.calculateRemaining();
    } else {
      this.calculateRemaining();
      clearInterval(this.timerwidget);
      this.openDialog();
    }
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(TimerNotifyComponent);
    dialogRef.componentInstance.timertotal = this.totaltimestring;
  }

  exit(): void {
    clearInterval(this.timerwidget);
    this.close.emit();
  }

}
