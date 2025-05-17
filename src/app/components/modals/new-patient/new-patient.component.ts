import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-patient',
  imports: [],
  templateUrl: './new-patient.component.html',
})
export class NewPatientComponent {
  @Output() closed = new EventEmitter<void>();

  stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }

  closeModal() {
    console.log('Fechando modal...');
    this.closed.emit();
  }
}
