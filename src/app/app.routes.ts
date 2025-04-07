import { Routes } from '@angular/router';
import { MessageListComponent } from '@features/messages/message-list/message-list.component';
import { PartnerListComponent } from '@features/partners/partner-list/partner-list.component';
import { NotFoundComponent } from '@shared/not-found/not-found.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'messages', pathMatch: 'full' },
  { path: 'messages', component: MessageListComponent },
    { path: 'partners', component: PartnerListComponent },
  { path: '**', component: NotFoundComponent }
];
