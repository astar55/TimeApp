import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { StopwatchServiceService } from '../../stopwatch-service.service';

@Component({
  selector: 'app-stopwatch-dialog',
  templateUrl: './stopwatch-dialog.component.html',
  styleUrls: ['./stopwatch-dialog.component.css']
})
export class StopwatchDialogComponent implements OnInit {

  constructor(public dialogRef:MdDialogRef<StopwatchDialogComponent>,
    private stopwatchService: StopwatchServiceService) { }

  ngOnInit() {
  }

  saveStopwatch(autostart:boolean, name = "Stopwatch") {
    if(name.trim().length == 0) {
      name = "Stopwatch";
    }
    let stopwatch = {name: name, autostart: autostart};
    this.stopwatchService.setStopwatch(stopwatch);
    this.dialogRef.close("save");
  }

}
