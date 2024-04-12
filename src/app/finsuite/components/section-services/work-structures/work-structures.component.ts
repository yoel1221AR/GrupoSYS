import { Component } from '@angular/core';

@Component({
  selector: 'app-work-structures',
  templateUrl: './work-structures.component.html',
  styleUrls: ['./work-structures.component.scss'],
})
export class WorkStructuresComponent {
  responsiveOptions: any[] = [];
  images: any[] = [
    {
      image: 'assets/img/services/work-structures/structure-1.webp',
    },
    {
      image: 'assets/img/services/work-structures/structure-2.webp',
    },
    {
      image: 'assets/img/services/work-structures/structure-3.webp',
    },
    {
      image: 'assets/img/services/work-structures/structure-4.webp',
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
