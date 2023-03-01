import { Component, Inject } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { BASE_URL } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello World!';

  constructor(@Inject(BASE_URL) private baseUrl: string) {
    console.log(baseUrl);
    const click$ = fromEvent(document, 'click');

    const pipedClick$ = click$.pipe(map((event) => `Event time: ${event.timeStamp}}`));

    pipedClick$.subscribe({
      next: (timeStamp) => console.log(timeStamp)
    });
  }
}
