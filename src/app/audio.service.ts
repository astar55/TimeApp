import { Injectable } from '@angular/core';

@Injectable()
export class AudioService {

  audio = "assets/ice-bell.mp3";

  constructor() { }

  getAudio() {
    return this.audio;
  }

}
