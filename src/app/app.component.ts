import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello World!';

  constructor() {
    const click$ = fromEvent(document, 'click');

    const pipedClick$ = click$.pipe(map((event) => `Event time: ${event.timeStamp}}`));

    pipedClick$.subscribe({
      next: (timeStamp) => console.log(timeStamp)
    });
  }
}
