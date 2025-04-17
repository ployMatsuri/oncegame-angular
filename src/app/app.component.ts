import { Component,OnInit } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  styleUrls: ['../styles.css'],
  imports: [NavbarComponent, FooterComponent, RouterOutlet],
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `
})
export class AppComponent implements OnInit { 
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.applyTheme();
    this.createStars();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
    this.applyTheme();
  }

  applyTheme() {
    if (typeof window !== 'undefined' && window.document) {
      const body = window.document.body;
      if (this.themeService.isDark()) {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
      } else {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
      }
    }
  }

  createStars() {
    if (typeof window !== 'undefined' && window.document) {
      const numberOfStars = 100; 
      const starContainer = document.body; 
      const pageHeight = document.documentElement.scrollHeight;
  
      for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
          const size = Math.random() * 3 + 1; 
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`; 
        star.style.animationDuration = `${Math.random() * 5 + 5}s`; 
        star.style.position = 'absolute';
        star.style.bottom = `-${pageHeight}px`; 
        star.style.zIndex = '-1'; 
        starContainer.appendChild(star);
      }
    }
  }
  
  
}