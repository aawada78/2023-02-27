import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class CustomPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    if (route.data && route.data.preloading) {
      const preload = route.data.preloading.preload;
      const startLoadingFrom = route.data.preloading.startLoadingFrom;
      const currentDate = new Date().getDate();

      console.log(preload, startLoadingFrom, currentDate);

      if (preload && currentDate >= startLoadingFrom) {
        return fn();
      }
    }

    return of(null);
  }
}
