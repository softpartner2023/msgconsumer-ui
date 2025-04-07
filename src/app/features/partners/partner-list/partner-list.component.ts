import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Partner } from '@models/partner.model';
import { PartnerService } from '@core/services/partner.service';

@Component({
  selector: 'app-partner-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partner-list.component.html'
})
export class PartnerListComponent implements OnInit {
  private partnerService = inject(PartnerService);
  partners: Partner[] = [];

  ngOnInit(): void {
    this.partnerService.getAll().subscribe({
      next: (data) => this.partners = data,
      error: (err) => console.error('Loading partners error', err),
    });
  }
}
