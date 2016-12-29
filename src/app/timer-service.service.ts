import { Injectable } from '@angular/core';

@Injectable()
export class TimerServiceService {
  timer = [];

  constructor() { }

  getTimer() {
    return this.timer;
  }

  setTimer(timer) {
    this.timer = this.timer.slice(0, this.getTimer().length+1).concat(timer);
  }

  emptyTimer() {
    this.timer = [];
  }

}
