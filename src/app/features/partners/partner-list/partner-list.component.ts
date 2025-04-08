import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PartnerService } from '@core/services/partner.service';
import { Partner } from '@models/partner.model';

@Component({
  selector: 'app-partner-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partner-list.component.html',
})
export class PartnerListComponent implements OnInit {
  partners: Partner[] = [];
  selectedPartner: Partner | null = null;

  constructor(private partnerService: PartnerService) {}

  ngOnInit(): void {
    this.loadPartners();
  }

  loadPartners(): void {
    this.partnerService.getAll().subscribe({
      next: (data) => (this.partners = data),
      error: (err) => console.error('Failed to load partners', err),
    });
  }

  viewDetails(partner: Partner): void {
    this.selectedPartner = partner;
  }

  closeDetails(): void {
    this.selectedPartner = null;
  }

  deletePartner(id: number): void {
    const confirmDelete = confirm('Are you sure you want to delete this partner?');
    if (!confirmDelete) return;

    this.partnerService.delete(id).subscribe({
      next: () => {
        this.partners = this.partners.filter((p) => p.id !== id);
        if (this.selectedPartner?.id === id) {
          this.selectedPartner = null;
        }
        console.log(`Partner with id ${id} deleted`);
      },
      error: (err) => console.error('Failed to delete partner', err),
    });
  }
}
