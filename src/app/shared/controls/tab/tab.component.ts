import { Component, Input, OnInit } from '@angular/core';
import { TabbedPaneComponent } from '../tabbed-pane/tabbed-pane.component';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  @Input() title = '';
  visible = true;

  // Access Parent Component
  // constructor(pane: TabbedPaneComponent) {
  //   pane.register(this);
  // }
  constructor() {}

  ngOnInit(): void {}
}
