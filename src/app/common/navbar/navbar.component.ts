import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  activeDropdown: string | null = null;

  toggleDropdown(menu: string): void {
    this.activeDropdown = this.activeDropdown === menu ? null : menu;
  }

  closeDropdown(): void {
    this.activeDropdown = null;
  }
}
