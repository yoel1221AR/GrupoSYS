import { Component } from '@angular/core';

@Component({
  selector: 'app-section-construction',
  templateUrl: './section-construction.component.html',
  styleUrls: ['./section-construction.component.scss'],
})
export class SectionConstructionComponent {
  responsiveOptions: any[] = [];
  images: any[] = [
    {
      image: 'assets/img/services/work-blacksmith/herreria-1.jpg',
    },
    {
      image: 'assets/img/services/work-blacksmith/herreria-2.jpg',
    },
    {
      image: 'assets/img/services/work-blacksmith/herreria-3.jpg',
    },
    {
      image: 'assets/img/services/work-blacksmith/herreria-4.jpg',
    },
    {
      image: 'assets/img/services/work-blacksmith/herreria-5.jpg',
    },
    {
      image: 'assets/img/services/work-blacksmith/herreria-6.jpg',
    },
    {
      image: 'assets/img/services/work-blacksmith/herreria-7.jpg',
    },
    {
      image: 'assets/img/services/work-blacksmith/herreria-8.jpg',
    },
  ];
  constructor() {
    this.setOptions();
  }

  setOptions() {
    this.responsiveOptions = [
      {
        breakpoint: '3000px',
        numVisible: 5,
        numScroll: 1,
      },
      {
        breakpoint: '2560px',
        numVisible: 5,
        numScroll: 1,
      },
      {
        breakpoint: '2000px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '1366px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '1100px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '1024px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
