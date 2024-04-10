import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent {
  responsiveOptions: any[] = [];
  clients: any[] = [
    {
      image: 'assets/img/clients/Logo-1.png',
    },
    {
      image: 'assets/img/clients/Logo-2.png',
    },
    {
      image: 'assets/img/clients/Logo-3.png',
    },
    {
      image: 'assets/img/clients/Logo-4.png',
    },
    {
      image: 'assets/img/clients/Logo-5.png',
    },
    {
      image: 'assets/img/clients/Logo-6.png',
    },
    {
      image: 'assets/img/clients/Logo-7.png',
    },
    {
      image: 'assets/img/clients/Logo-8.png',
    },
  ];
  constructor() {
    this.setOptions();
  }

  setOptions() {
    this.responsiveOptions = [
      {
        breakpoint: '3000px',
        numVisible: 11,
        numScroll: 1,
      },
      {
        breakpoint: '2560px',
        numVisible: 10,
        numScroll: 1,
      },
      {
        breakpoint: '2000px',
        numVisible: 7,
        numScroll: 1,
      },
      {
        breakpoint: '1366px',
        numVisible: 5,
        numScroll: 1,
      },
      {
        breakpoint: '1100px',
        numVisible: 4,
        numScroll: 1,
      },
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '768px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '576px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '361px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
