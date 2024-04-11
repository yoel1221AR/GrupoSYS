import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.scss'],
})
export class ViewsComponent {
  activeLink: string = 'home';
  constructor(private viewportScroller: ViewportScroller) {}

  scrollToSection(id: string): void {
    this.viewportScroller.scrollToAnchor(id);
  }

  activateLink(link: string): void {
    this.activeLink = link;
  }
}
