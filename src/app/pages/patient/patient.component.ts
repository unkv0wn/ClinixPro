import { Component } from '@angular/core';
import { IconHeaderComponent } from '../../components/icon-header/icon-header.component';
import {
  ChevronsLeft,
  ChevronsRight,
  LucideAngularModule,
  Users,
} from 'lucide-angular';
import { CommonModule } from '@angular/common';
import { CardPatientComponent } from '../../components/user-profile-card/user-profile-card.component';
import { NewPatientComponent } from '../../components/modals/new-patient/new-patient.component';

@Component({
  selector: 'app-patient',
  imports: [
    IconHeaderComponent,
    LucideAngularModule,
    CommonModule,
    CardPatientComponent,
    NewPatientComponent,
  ],
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
})
export class PatientComponent {
  readonly Users = Users;
  readonly Chevronsright = ChevronsRight;
  readonly Chevronleft = ChevronsLeft;
  isModal: boolean = false;

  showModal() {
    this.isModal = !this.isModal;
  }

  pacientes = [
    {
      id: 1,
      nome: 'Matheus Fraga da Silva',
      cpf: '033.033.033-33',
      telefone: '(11) 91212-1212',
      status: false,
      atualizadoEm: '08/04/2025',
    },
    {
      id: 2,
      nome: 'Joana Marques Rocha',
      cpf: '044.044.044-44',
      telefone: '(21) 98888-7777',
      status: true,
      atualizadoEm: '07/04/2025',
    },
    {
      id: 3,
      nome: 'Carlos Henrique Melo',
      cpf: '055.055.055-55',
      telefone: '(31) 97777-6666',
      status: false,
      atualizadoEm: '06/04/2025',
    },
    {
      id: 3,
      nome: 'Carlos Henrique Melo',
      cpf: '055.055.055-55',
      telefone: '(31) 97777-6666',
      status: true,
      atualizadoEm: '06/04/2025',
    },
    {
      id: 3,
      nome: 'Carlos Henrique Melo',
      cpf: '055.055.055-55',
      telefone: '(31) 97777-6666',
      status: false,
      atualizadoEm: '06/04/2025',
    },
  ];
}
