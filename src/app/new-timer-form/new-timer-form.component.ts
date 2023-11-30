import { Component } from '@angular/core';
import { TimerHelpService } from '../timer-help.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

interface increment {
  display: string;
  duration: number;
}

@Component({
  selector: 'app-new-timer-form',
  templateUrl: './new-timer-form.component.html',
  styleUrls: ['./new-timer-form.component.scss'],
  standalone: true,
  // providers: [NgFor],
  imports: [FormsModule, NgFor]
})

export class NewTimerFormComponent {
  timer = {
    name: '',
    duration: 0
  };

  increments: increment[] = [
    { display: '1m', duration: 1 },
    { display: '5m', duration: 5 },
  ];
  
  constructor(private timerService: TimerHelpService) {}

  incrementDuration(increment: increment): void {
    this.timer.duration = (this.timer.duration || 0) + increment.duration;
  }

  onSubmit(): void {
    this.timerService.addTimer(this.timer.name, this.timer.duration || 100);
    this.timer = {
      name: '',
      duration: 0
    };
  }
}
