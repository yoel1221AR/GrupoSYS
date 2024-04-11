import { ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.scss'],
})
export class ViewsComponent {
  activeLink: string = 'home';
  isSticky: boolean = false;
  constructor(private viewportScroller: ViewportScroller) {}

  scrollToSection(id: string): void {
    this.viewportScroller.scrollToAnchor(id);
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    this.isSticky = scrollPosition > 100; // Cambia 100 por la distancia desde la parte superior en la que quieres que el navbar se fije
  }

  activateLink(link: string): void {
    this.activeLink = link;
  }
}
