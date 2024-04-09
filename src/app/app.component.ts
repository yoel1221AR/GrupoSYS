import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ThemeService } from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private themeService: ThemeService) {
    // this language will be used as a fallback when a translation isn't found in the current language

    const savedLanguage = localStorage.getItem('language') || 'es';
  }

  ngOnInit() {}
}
