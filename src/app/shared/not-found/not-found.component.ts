import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-not-found',
  imports: [CommonModule],
  template: `<h2>404 - Page not found</h2><a routerLink="/">Back to home</a>`
})
export class NotFoundComponent {}
