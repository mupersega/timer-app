import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';

export interface Timer {
  id: number;
  name: string;
  start: DateTime;
  end: DateTime;
}

@Injectable({
  providedIn: 'root'
})
export class TimerHelpService {
  timers: Timer[] = [];

  constructor() {}

  getNow(): DateTime {
    return DateTime.local();
  }

  getNowPlusSeconds(seconds: number): DateTime {
    return this.getNow().plus({ seconds });
  }

  getNowPlusMinutes(minutes: number): DateTime {
    return this.getNow().plus({ minutes });
  }

  getNowPlusHours(hours: number): DateTime {
    return this.getNow().plus({ hours });
  }

  convertMinutesToSeconds(minutes: number): number {
    return minutes * 60;
  }

  convertSecondsToMinutes(seconds: number): number {
    return seconds / 60;
  }

  buildTimer(name: string, duration: number): Timer {
    return {
      id: Date.now(),
      name,
      start: this.getNow(),
      end: this.getNowPlusSeconds(duration),
    }
  }

  addTimer(name: string, duration: number): void {
    this.timers.push(this.buildTimer(name, duration));
  }

}
