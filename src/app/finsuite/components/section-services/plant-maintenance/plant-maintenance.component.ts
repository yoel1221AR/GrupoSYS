import { Component } from '@angular/core';

@Component({
  selector: 'app-plant-maintenance',
  templateUrl: './plant-maintenance.component.html',
  styleUrls: ['./plant-maintenance.component.scss'],
})
export class PlantMaintenanceComponent {
  responsiveOptions: any[] = [];
  images: any[] = [
    {
      image: 'assets/img/services/plant-maintenance/maintenance-1.webp',
    },
    {
      image: 'assets/img/services/plant-maintenance/maintenance-2.webp',
    },
    {
      image: 'assets/img/services/plant-maintenance/maintenance-3.webp',
    },
    {
      image: 'assets/img/services/plant-maintenance/maintenance-4.webp',
    },
    {
      image: 'assets/img/services/plant-maintenance/maintenance-5.webp',
    },
    {
      image: 'assets/img/services/plant-maintenance/maintenance-6.webp',
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
