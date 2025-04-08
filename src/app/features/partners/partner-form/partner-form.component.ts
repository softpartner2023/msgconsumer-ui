import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@app/material.module';
import { PartnerService } from '@core/services/partner.service';
import { Direction } from '@enums/direction.enum';
import { ProcessedFlowType } from '@enums/processed-flow-type.enum';
import { Partner } from '@models/partner.model';

@Component({
  selector: 'app-partner-form',
  standalone: true,
  templateUrl: './partner-form.component.html',
  styleUrls: ['./partner-form.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
})
export class PartnerFormComponent {
  partnerForm: FormGroup;

  directionValues = Object.values(Direction);
  flowTypeValues = Object.values(ProcessedFlowType);

  constructor(
    private fb: FormBuilder,
    private partnerService: PartnerService,
    private router: Router
  ) {
    this.partnerForm = this.fb.group({
      alias: ['', Validators.required],
      type: ['', Validators.required],
      direction: ['', Validators.required],
      application: [''],
      processedFlowType: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.partnerForm.valid) {
      const partner: Partner = this.partnerForm.value;
      this.partnerService.create(partner).subscribe(() => {
        this.router.navigate(['/partners']);
      });
    }
  }
}
