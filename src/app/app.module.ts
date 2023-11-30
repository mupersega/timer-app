import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TimerHelpService } from './timer-help.service';
import { NewTimerFormComponent } from './new-timer-form/new-timer-form.component';
import { DateTimePipe } from './date-time.pipe';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
  ],
  imports: [
    BrowserModule,
    NewTimerFormComponent,
    DateTimePipe
  ],
  providers: [
    TimerHelpService,
    // DateTimePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
