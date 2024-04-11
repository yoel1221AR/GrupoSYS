import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  banners: any[] = [
    {
      img: 'assets/img/services/tanks/tank-1.jpg',
    },
    {
      img: 'assets/img/services/tanks/tank-2.jpg',
    },
    {
      img: 'assets/img/services/tanks/tank-3.jpg',
    },
    {
      img: 'assets/img/services/tanks/tank-4.jpg',
    },
    {
      img: 'assets/img/services/tanks/tank-5.jpg',
    },
    {
      img: 'assets/img/services/tanks/tank-6.jpg',
    },
    {
      img: 'assets/img/services/tanks/tank-7.jpg',
    },
    {
      img: 'assets/img/services/tanks/tank-8.jpg',
    },
  ];
}
