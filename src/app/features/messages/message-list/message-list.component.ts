import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from '@core/services/message.service';
import { Message } from '@models/message.model';

@Component({
  selector: 'app-message-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message-list.component.html'
})
export class MessageListComponent implements OnInit {
  private messageService = inject(MessageService);
  messages: Message[] = [];

  ngOnInit(): void {
    this.messageService.getAll().subscribe({
      next: (data) => this.messages = data,
      error: (err) => console.error('Error loading messages', err),
    });
  }
}
