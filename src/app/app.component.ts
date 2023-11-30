import { Component } from '@angular/core';
import { NewTimerFormComponent } from './new-timer-form/new-timer-form.component';
import { TimerHelpService } from './timer-help.service';
import { DateTimePipe } from './date-time.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NewTimerFormComponent]
})
export class AppComponent {
  title = 'timer-app';

  constructor(
    public timerService: TimerHelpService
  ) {
  }

}
