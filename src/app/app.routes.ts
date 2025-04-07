import { Routes } from '@angular/router';
import { MessageListComponent } from '@features/messages/message-list/message-list.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'messages', pathMatch: 'full' },
  { path: 'messages', component: MessageListComponent },
];


