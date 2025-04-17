import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class NavbarComponent {
  isMenuOpen: boolean = false;
  constructor(
    public themeService: ThemeService,
    private router: Router
  ) {}

  closeNavbar() {
    const navbarToggle = document.getElementsByClassName('navbar-toggler')[0] as HTMLElement;
    navbarToggle.click();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  goToHome(): void {
    window.location.href = ``;
  }
}
