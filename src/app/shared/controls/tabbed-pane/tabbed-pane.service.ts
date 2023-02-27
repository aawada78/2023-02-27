import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TabbedPaneService {
  // private pageCountSubject = new BehaviorSubject<number>(0);
  // // eslint-disable-next-line @typescript-eslint/member-ordering
  // readonly pageCount = this.pageCountSubject.asObservable();

  // private currentPageSubject = new BehaviorSubject<number>(1);
  // // eslint-disable-next-line @typescript-eslint/member-ordering
  // readonly currentPage = this.currentPageSubject.asObservable();

  readonly pageCount = new BehaviorSubject<number>(0);
  readonly currentPage = new BehaviorSubject<number>(1);

  constructor() {}

  // publishPageCount(pageCount: number) {
  //   this.pageCountSubject.next(pageCount);
  // }

  // publishCurrentPage(currentPage: number) {
  //   this.currentPageSubject.next(currentPage);
  // }
}
