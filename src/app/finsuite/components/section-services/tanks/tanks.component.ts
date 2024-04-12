import { Component } from '@angular/core';

@Component({
  selector: 'app-tanks',
  templateUrl: './tanks.component.html',
  styleUrls: ['./tanks.component.scss'],
})
export class TanksComponent {
  responsiveOptions: any[] = [];
  images: any[] = [
    {
      image: 'assets/img/services/tanks/tank-1.webp',
    },
    {
      image: 'assets/img/services/tanks/tank-2.webp',
    },
    {
      image: 'assets/img/services/tanks/tank-3.webp',
    },
    {
      image: 'assets/img/services/tanks/tank-4.webp',
    },
    {
      image: 'assets/img/services/tanks/tank-5.webp',
    },
    {
      image: 'assets/img/services/tanks/tank-6.webp',
    },
    {
      image: 'assets/img/services/tanks/tank-7.webp',
    },
    {
      image: 'assets/img/services/tanks/tank-8.webp',
    },
    {
      image: 'assets/img/services/tanks/tank-9.webp',
    },
    {
      image: 'assets/img/services/tanks/tank-10.webp',
    },
    {
      image: 'assets/img/services/tanks/tank-11.jpeg',
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
