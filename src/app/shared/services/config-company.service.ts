import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigCompanyService {
  private companyLogo: string =
    'assets/finsuite/img/logoEasybanking/LogoEasy.svg';
  private companyName: string = 'Easybanking';
  private lastUpdate: string = '2024';
  constructor() {}

  getLogo(): string {
    return this.companyLogo;
  }
  getName(): string {
    return this.companyName;
  }
  getLastUpdate(): string {
    return this.lastUpdate;
  }
}
