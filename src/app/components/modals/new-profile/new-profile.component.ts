import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputFieldComponent } from '../../input-field/input-field.component';
import { ComboBoxFieldComponent } from '../../combo-box-field/combo-box-field.component';
import { CommonModule } from '@angular/common';
import { DateInputComponent } from '../../date-input/date-input.component';

@Component({
  selector: 'app-new-profile',
  imports: [
    InputFieldComponent,
    ComboBoxFieldComponent,
    CommonModule,
    DateInputComponent,
  ],
  templateUrl: './new-profile.component.html',
})
export class NewProfileComponent {
  @Output() closed = new EventEmitter<void>();
  @Input() isMedical : boolean = false;

  stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }

  closeModal() {
    console.log('Fechando modal...');
    this.closed.emit();
  }

  selectedgender: any = null;


  onGenderSelected(Gender: any) {
    this.selectedgender = Gender; // Armazena o médico selecionado
    console.log('Médico selecionado:', Gender.id);
  }

  onDateSelected(date: any) {
    console.log('Data selecionada:', date);
  }

  gender = [
    { id: 1, nome: 'Masculino' }, // Exemplo de médicos
    { id: 2, nome: 'Feminino' },
  ];
}
