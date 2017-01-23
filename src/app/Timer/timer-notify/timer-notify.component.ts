import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { AudioService } from '../../audio.service';

@Component({
  selector: 'app-timer-notify',
  templateUrl: './timer-notify.component.html',
  styleUrls: ['./timer-notify.component.css']
})
export class TimerNotifyComponent implements OnInit {

  timername: string;
  timertotal: string;
  audio: string;

  constructor(public dialogRef:MdDialogRef<TimerNotifyComponent>,
  private audioService: AudioService) { }

  ngOnInit() {
    this.audio = this.audioService.getAudio();
  }

  setTimerTotal(total: string) {
    this.timertotal = total;
  }



}
