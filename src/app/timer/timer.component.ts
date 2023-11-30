import { Component, Input } from '@angular/core';
import { Timer } from '../timer-help.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {
 @Input() data!: Timer;
}
