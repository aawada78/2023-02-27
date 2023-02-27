import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TabbedPaneService } from '../tabbed-pane/tabbed-pane.service';

@Component({
  selector: 'app-tab-navigator',
  templateUrl: './tab-navigator.component.html',
  styleUrls: ['./tab-navigator.component.scss']
})
export class TabNavigatorComponent implements OnInit {
  // @Input() page = 1;
  // @Input() pageCount = 0;
  // @Output() pageChange = new EventEmitter<number>();
  page = 1;
  pageCount = 0;

  constructor(private tabbedPaneService: TabbedPaneService) {}

  ngOnInit(): void {
    this.tabbedPaneService.currentPage.subscribe({
      next: (currentPage: number) => {
        this.page = currentPage;
      }
    });

    this.tabbedPaneService.pageCount.subscribe({
      next: (pageCount: number) => {
        this.pageCount = pageCount;
      }
    });
  }

  prev(): void {
    if (this.page <= 1) {
      return;
    }

    // this.page--;
    // this.pageChange.emit(this.page);
    this.tabbedPaneService.currentPage.next(--this.page);
  }

  next(): void {
    if (this.page >= this.pageCount) {
      return;
    }

    // this.page++;
    // this.pageChange.emit(this.page);
    this.tabbedPaneService.currentPage.next(++this.page);
  }
}
