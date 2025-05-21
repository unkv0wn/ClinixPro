import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputFieldComponent } from '../../input-field/input-field.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-service-payment',
  imports: [InputFieldComponent, CommonModule],
  templateUrl: './new-service-payment.component.html',
})
export class NewServicePaymentComponent {
  @Input() IsPaymentForm = false;

  @Output() closed = new EventEmitter<void>();

  stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }

  closeModal() {
    console.log('Fechando modal...');
    this.closed.emit();
  }
}
