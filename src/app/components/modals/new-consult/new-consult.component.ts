import { Component, EventEmitter, Output } from '@angular/core';
import { ChevronsRight, LucideAngularModule, Pen } from 'lucide-angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputFieldComponent } from '../../input-field/input-field.component';
import { ComboBoxFieldComponent } from '../../combo-box-field/combo-box-field.component';
import { DateInputComponent } from '../../date-input/date-input.component';

@Component({
  selector: 'app-new-consult',
  imports: [
    LucideAngularModule,
    CommonModule,
    FormsModule,
    InputFieldComponent,
    ComboBoxFieldComponent,
    DateInputComponent,
  ],
  templateUrl: './new-consult.component.html',
})
export class NewConsultComponent {
  readonly Pen = Pen;
  readonly ChevronsRight = ChevronsRight;

  @Output() closed = new EventEmitter<void>();

  stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }

  closeModal() {
    console.log('Fechando modal...');
    this.closed.emit();
  }

  medicos = [
    { id: 1, nome: 'Dr. João Silva' },
    { id: 2, nome: 'Dra. Maria Oliveira' },
    { id: 3, nome: 'Dr. Pedro Santos' },
    { id: 4, nome: 'Dra. Ana Costa' },
    { id: 5, nome: 'Dr. Lucas Almeida' },
    { id: 6, nome: 'Dra. Fernanda Lima' },
    { id: 7, nome: 'Dr. Carlos Pereira' },
    { id: 8, nome: 'Dra. Juliana Rocha' },
    { id: 9, nome: 'Dr. Rafael Martins' },
    { id: 10, nome: 'Dra. Beatriz Souza' },
  ];

  servicos = [
    { id: 1, nome: 'Raio-x' },
    { id: 2, nome: 'Checkup' },
    { id: 3, nome: 'Retorno' },
  ];

  steps = [
    { label: 'Informações Pessoais' },
    { label: 'Serviços' },
    { label: 'Descrição' },
    { label: 'Revisão' },
  ];

  horas = [
    { id: 1, hora: '08:00' },
    { id: 2, hora: '09:00' },
    { id: 3, hora: '10:00' },
    { id: 4, hora: '11:00' },
    { id: 5, hora: '12:00' },
    { id: 6, hora: '13:00' },
    { id: 7, hora: '14:00' },
    { id: 8, hora: '15:00' },
    { id: 9, hora: '16:00' },
    { id: 10, hora: '17:00' },
  ];

  OtherMedicos = [
    { id: 1, nome: 'Sim' }, // Exemplo de médicos
    { id: 2, nome: 'Nao' },
  ];

  currentStep = 0; // começa na primeira etapa
  selectedMedico: any = null; // Armazena o médico selecionado
  selectedServico: any = null;
  selectedHora: any = null;
  selectedOtherMedico: any = null; // Armazena o médico selecionado

  nextStep() {
    if (this.currentStep < 3) this.currentStep++; // 0,1,2,3 → 4 etapas
  }

  prevStep() {
    if (this.currentStep > 0) this.currentStep--;
  }

  onMedicoSelected(medico: any) {
    this.selectedMedico = medico; // Armazena o médico selecionado
    console.log('Médico selecionado:', medico.id);
  }

  onServicoSelected(servicos: any) {
    this.selectedServico = servicos;
    console.log('Servico selecionado:', servicos.id);
  }

  onDateSelected(date: any) {
    console.log('Data selecionada:', date);
  }

  onHourSelected(horas: any) {
    this.selectedHora = horas;
    console.log('Data selecionada:', horas.hora);
  }

  onOtherMedicoSelected(otherMedico: any) {
    this.selectedOtherMedico = otherMedico; // Armazena o médico selecionado
    console.log('Médico selecionado:', otherMedico.nome);

  }
  confirmar() {
    // Aqui você pode fazer a requisição para salvar os dados
  }
}
