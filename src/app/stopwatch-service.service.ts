import { Injectable } from '@angular/core';

@Injectable()
export class StopwatchServiceService {
  stopwatch = [];

  constructor() { }

  getStopwatch() {
    return this.stopwatch;
  }

  setStopwatch(stopwatch) {
    this.stopwatch = this.stopwatch.slice(0, this.getStopwatch().length+1).concat(stopwatch);
  }

  emptyStopwatch() {
    this.stopwatch = []
  }

}
