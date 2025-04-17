import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private isDarkMode = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('theme');
      this.isDarkMode = saved === 'dark';
      this.applyTheme();
    }
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    this.applyTheme();
  }

  isDark(): boolean {
    return this.isDarkMode;
  }

  private applyTheme(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const body = document.body;
    body.classList.toggle('bg-dark', this.isDarkMode);
    body.classList.toggle('bg-light', !this.isDarkMode);
    body.classList.toggle('text-white', this.isDarkMode);
    body.classList.toggle('text-dark', !this.isDarkMode);
  }
}
