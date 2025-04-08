import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Partner } from '@models/partner.model';
import { Direction } from '@enums/direction.enum';
import { ProcessedFlowType } from '@enums/processed-flow-type.enum';
import { PartnerService } from '@core/services/partner.service';

@Component({
  selector: 'app-partner-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './partner-form.component.html',
})
export class PartnerFormComponent {
  partner: Partner = {
    id: 0,
    alias: '',
    type: '',
    direction: Direction.INBOUND,
    application: '',
    processedFlowType: ProcessedFlowType.MESSAGE,
    description: '',
  };

  directionEnum = Direction;
  flowTypeEnum = ProcessedFlowType;

  constructor(private partnerService: PartnerService, private router: Router) {}

  directionKeys(): string[] {
    return Object.keys(this.directionEnum);
  }

  flowTypeKeys(): string[] {
    return Object.keys(this.flowTypeEnum);
  }

  submit(): void {
    this.partnerService.create(this.partner).subscribe({
      next: () => this.router.navigate(['/partners']),
      error: (err) => console.error('Failed to create partner', err),
    });
  }
}
