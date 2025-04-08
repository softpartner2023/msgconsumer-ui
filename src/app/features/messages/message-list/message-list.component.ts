import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from '@core/services//message.service';
import { Message } from '@models/message.model';
import {
  trigger,
  transition,
  style,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-message-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message-list.component.html',
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('200ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'scale(0.95)' })),
      ]),
    ]),
  ],
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [];
  selectedMessage: Message | null = null;

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService.getAll().subscribe({
      next: (data) => (this.messages = data),
      error: (err) => console.error('Erreur lors du chargement des messages', err),
    });
  }

  showDetails(message: Message): void {
    this.selectedMessage = message;
  }

  closePopup(): void {
    this.selectedMessage = null;
  }
}
