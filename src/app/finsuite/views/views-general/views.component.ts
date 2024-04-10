import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.scss'],
})
export class ViewsComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  scrollToSection(id: string): void {
    this.viewportScroller.scrollToAnchor(id);
  }
}
