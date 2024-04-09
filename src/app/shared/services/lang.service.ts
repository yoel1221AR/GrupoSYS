import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Lang } from '../models/Lang';


@Injectable({
  providedIn: 'root',
})
export class LangService {
  private languages: Lang[] = [
    { code: 'en', label: 'FS.HEADER.CONFIG.LANGUAGES.EN' },
    { code: 'es', label: 'FS.HEADER.CONFIG.LANGUAGES.ES' },
    { code: 'pt', label: 'FS.HEADER.CONFIG.LANGUAGES.PT' },
  ];

  private currentLanguageSubject: BehaviorSubject<Lang> =
    new BehaviorSubject<Lang>(this.languages[0]);

  public currentLanguage$: Observable<Lang> =
    this.currentLanguageSubject.asObservable();

  constructor(private translateService: TranslateService) {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      this.setCurrentLanguage(savedLanguage);
    } else {
      this.setCurrentLanguage(this.languages[0].code);
    }
  }

  getCurrentLanguage(): Lang {
    return this.currentLanguageSubject.value;
  }

  setCurrentLanguage(code: string): void {    
    const selectedLanguage = this.languages.find((lang) => lang.code === code);
    if (selectedLanguage) {
      this.translateService.use(selectedLanguage.code);
      localStorage.setItem('language', selectedLanguage.code);
      this.currentLanguageSubject.next(selectedLanguage);
    }
  }

  getAllLanguages(): Lang[] {
    return this.languages;
  }
}
