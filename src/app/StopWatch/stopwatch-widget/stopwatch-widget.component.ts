import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stopwatch-widget',
  templateUrl: './stopwatch-widget.component.html',
  styleUrls: ['./stopwatch-widget.component.css']
})
export class StopwatchWidgetComponent implements OnInit {
  stopwatchid: number;
  stopwatchname: string;
  totaltime = 0;
  totaltimestring = "0s 00";
  paused: boolean = false;
  started: boolean = false;
  stopwatchwidget: any;
  close: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    if (this.started) {
      this.stopwatchwidget = setInterval(() => {this.incrementTime()}, 10);
    }
  }

  ngOnDestroy() {
    if(this.stopwatchwidget) {
      clearInterval(this.stopwatchwidget);
    }
  }

  calculateTotal() {
    if (this.totaltime < (1000*60)) {
      let seconds = ((this.totaltime /1000) >> 0).toString();
      let milli =  ((((this.totaltime % 1000) / 10) >> 0) >= 10) ? (((this.totaltime % 1000) / 10) >> 0).toString() : "0"+(((this.totaltime % 1000) / 10) >> 0).toString();
      this.totaltimestring = `${seconds}s ${milli}`;
    }
    else if (this.totaltime < (1000 * 60 * 60) ) {
      let min = ((this.totaltime / (1000 * 60)) >> 0).toString();
      let seconds = ((((this.totaltime / 1000) % 60) >> 0) >= 10) ? (((this.totaltime / 1000) % 60) >> 0).toString() : "0"+(((this.totaltime / 1000) % 60) >> 0).toString();
      let milli = ((((this.totaltime % 1000) / 10) >> 0) >= 10) ? ((this.totaltime % 1000) / 10).toString() : "0"+((this.totaltime % 1000) / 10).toString();
      this.totaltimestring = `${min}m ${seconds}s ${milli}`;
    }
    else {
      let hour = ((this.totaltime/ (1000 * 60 * 60)) >> 0).toString();
      let min = ((((this.totaltime/ (1000 * 60)) % 60) >> 0) >= 10) ? (((this.totaltime/ (1000 * 60)) % 60) >> 0).toString() : "0" + (((this.totaltime/ (1000 * 60)) % 60) >> 0).toString();
      let seconds = ((((this.totaltime/ 1000) % 60) >> 0) >= 10) ? (((this.totaltime/ 1000) % 60) >> 0).toString() : "0" + (((this.totaltime/ 1000) % 60) >> 0).toString();
      let milli = ((((this.totaltime % 1000) / 10) >> 0) >= 10) ? (((this.totaltime % 1000) / 10) >> 0).toString() : "0"+(((this.totaltime % 1000) / 10) >> 0).toString();
      this.totaltimestring = `${hour}h ${min}m ${seconds}s ${milli}`;
    }
  }

  pauseStopwatch(): void {
    clearInterval(this.stopwatchwidget);
    this.paused = !this.paused;
  }

  resumeStopwatch(): void {
    this.paused = !this.paused;
    this.stopwatchwidget = setInterval(() => {this.incrementTime()}, 10);
  }

  startStopwatch(): void {
    this.started = true;
    this.stopwatchwidget = setInterval(() => {this.incrementTime()}, 10);
  }

  resetStopwatch(): void {
    clearInterval(this.stopwatchwidget);
    this.paused = false;
    this.started = false;
    this.totaltime = 0;
    this.calculateTotal();
  }

  incrementTime(): void {
    this.totaltime += 10;
    this.calculateTotal();
  }

  exit(): void {
    clearInterval(this.stopwatchwidget);
    this.close.emit(this.stopwatchid);
  }
}
