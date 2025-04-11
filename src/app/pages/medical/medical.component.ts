import { Component } from '@angular/core';
import { CardPatientComponent } from "../../components/user-profile-card/user-profile-card.component";
import { IconHeaderComponent } from "../../components/icon-header/icon-header.component";
import { LucideAngularModule, Users } from 'lucide-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-medical',
  imports: [CardPatientComponent, IconHeaderComponent, LucideAngularModule, CommonModule],
  templateUrl: './medical.component.html',

})
export class MedicalComponent {

  readonly Users = Users;

  medicos = [
    {
      id: 1,
      nome: 'Dr. Ana Paula Costa',
      crm: '123456-SP',
      telefone: '(11) 91234-5678',
      status: 'Ativo',
      atualizadoEm: '2025-04-08',
    },
    {
      id: 2,
      nome: 'Dr. Ricardo Lima',
      crm: '234567-RJ',
      telefone: '(21) 98765-4321',
      status: 'Inativo',
      atualizadoEm: '2025-03-29',
    },
    {
      id: 3,
      nome: 'Dra. Mariana Alves',
      crm: '345678-MG',
      telefone: '(31) 99876-5432',
      status: 'Ativo',
      atualizadoEm: '2025-04-02',
    },
    {
      id: 4,
      nome: 'Dr. João Pedro Silva',
      crm: '456789-SP',
      telefone: '(11) 93456-7890',
      status: 'Ativo',
      atualizadoEm: '2025-04-09',
    },
    {
      id: 5,
      nome: 'Dra. Camila Rocha',
      crm: '567890-RS',
      telefone: '(51) 98888-7777',
      status: 'Inativo',
      atualizadoEm: '2025-03-15',
    },
    {
      id: 6,
      nome: 'Dr. Gustavo Torres',
      crm: '678901-PR',
      telefone: '(41) 98765-1122',
      status: 'Ativo',
      atualizadoEm: '2025-04-05',
    },
    {
      id: 7,
      nome: 'Dra. Fernanda Martins',
      crm: '789012-BA',
      telefone: '(71) 93456-2233',
      status: 'Ativo',
      atualizadoEm: '2025-04-03',
    },
    {
      id: 8,
      nome: 'Dr. Leonardo Ferreira',
      crm: '890123-SC',
      telefone: '(48) 91234-3344',
      status: 'Ativo',
      atualizadoEm: '2025-04-01',
    },
    {
      id: 9,
      nome: 'Dra. Beatriz Nogueira',
      crm: '901234-CE',
      telefone: '(85) 97654-4455',
      status: 'Inativo',
      atualizadoEm: '2025-03-27',
    },
    {
      id: 10,
      nome: 'Dr. Tiago Mendes',
      crm: '012345-PE',
      telefone: '(81) 98765-5566',
      status: 'Ativo',
      atualizadoEm: '2025-04-07',
    },
  ];
  
}
