import { AfterContentInit, AfterViewInit, Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { TabbedPaneService } from './tabbed-pane.service';

@Component({
  selector: 'app-tabbed-pane',
  templateUrl: './tabbed-pane.component.html',
  styleUrls: ['./tabbed-pane.component.scss'],
  providers: [TabbedPaneService]
})
export class TabbedPaneComponent implements OnInit, AfterContentInit, AfterViewInit {
  @ContentChildren(TabComponent)
  tabQueryList: QueryList<TabComponent> | undefined;
  activeTab: TabComponent | undefined;
  currentPage = 0;

  constructor(private tabbedPaneService: TabbedPaneService) {}

  // tabs: Array<TabComponent> = [];
  get tabs(): TabComponent[] {
    return this.tabQueryList?.toArray() ?? [];
  }

  ngAfterViewInit(): void {
    this.tabbedPaneService.pageCount.next(this.tabs.length);
    this.tabbedPaneService.currentPage.subscribe({
      next: (page) => {
        if (page === this.currentPage) {
          return;
        }
        this.pageChange(page);
      }
    });
  }

  ngAfterContentInit(): void {
    if (this.tabs.length > 0) {
      this.activate(this.tabs[0]);
    }
  }

  ngOnInit(): void {}

  // register(tab: TabComponent): void {
  //   this.tabs.push(tab);
  // }

  activate(active: TabComponent) {
    for (const tab of this.tabs) {
      tab.visible = tab === active;
    }

    this.activeTab = active;

    this.currentPage = this.tabs.indexOf(active) + 1;
    this.tabbedPaneService.currentPage.next(this.currentPage);
  }

  pageChange(page: number): void {
    this.activate(this.tabs[page - 1]);
  }
}
