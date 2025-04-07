import { Routes } from '@angular/router';
import { MessageListComponent } from '@features/messages/message-list/message-list.component';
import { NotFoundComponent } from '@shared/not-found/not-found.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'messages', pathMatch: 'full' },
  { path: 'messages', component: MessageListComponent },
  { path: '**', component: NotFoundComponent }
];
