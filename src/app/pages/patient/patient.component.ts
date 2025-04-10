import { Component } from '@angular/core';
import { IconHeaderComponent } from '../../components/icon-header/icon-header.component';
import {
  LucideAngularModule,

  Users,
} from 'lucide-angular';
import { CommonModule } from '@angular/common';
import { CardPatientComponent } from "../../components/card-patient/card-patient.component";

@Component({
  selector: 'app-patient',
  imports: [IconHeaderComponent, LucideAngularModule, CommonModule, CardPatientComponent],
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
})
export class PatientComponent {
  readonly Users = Users;

  pacientes = [
    {
      id: 1,
      nome: 'Matheus Fraga da Silva',
      cpf: '033.033.033-33',
      telefone: '(11) 91212-1212',
      status: 'Inativo',
      atualizadoEm: '08/04/2025'
    },
    {
      id: 2,
      nome: 'Joana Marques Rocha',
      cpf: '044.044.044-44',
      telefone: '(21) 98888-7777',
      status: 'Ativo',
      atualizadoEm: '07/04/2025'
    },
    {
      id: 3,
      nome: 'Carlos Henrique Melo',
      cpf: '055.055.055-55',
      telefone: '(31) 97777-6666',
      status: 'Ativo',
      atualizadoEm: '06/04/2025'
    },
    {
      id: 3,
      nome: 'Carlos Henrique Melo',
      cpf: '055.055.055-55',
      telefone: '(31) 97777-6666',
      status: 'Ativo',
      atualizadoEm: '06/04/2025'
    },
    {
      id: 3,
      nome: 'Carlos Henrique Melo',
      cpf: '055.055.055-55',
      telefone: '(31) 97777-6666',
      status: 'Ativo',
      atualizadoEm: '06/04/2025'
    },
    {
      id: 3,
      nome: 'Carlos Henrique Melo',
      cpf: '055.055.055-55',
      telefone: '(31) 97777-6666',
      status: 'Ativo',
      atualizadoEm: '06/04/2025'
    },
    {
      id: 3,
      nome: 'Carlos Henrique Melo',
      cpf: '055.055.055-55',
      telefone: '(31) 97777-6666',
      status: 'Ativo',
      atualizadoEm: '06/04/2025'
    },
    {
      id: 3,
      nome: 'Carlos Henrique Melo',
      cpf: '055.055.055-55',
      telefone: '(31) 97777-6666',
      status: 'Ativo',
      atualizadoEm: '06/04/2025'
    },
    {
      id: 3,
      nome: 'Carlos Henrique Melo',
      cpf: '055.055.055-55',
      telefone: '(31) 97777-6666',
      status: 'Ativo',
      atualizadoEm: '06/04/2025'
    },
    {
      id: 3,
      nome: 'Carlos Henrique Melo',
      cpf: '055.055.055-55',
      telefone: '(31) 97777-6666',
      status: 'Ativo',
      atualizadoEm: '06/04/2025'
    },
    {
      id: 3,
      nome: 'Carlos Henrique Melo',
      cpf: '055.055.055-55',
      telefone: '(31) 97777-6666',
      status: 'Ativo',
      atualizadoEm: '06/04/2025'
    },
  ];

}
