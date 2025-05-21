import { Component } from '@angular/core';
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  LucideAngularModule,
  Users,
} from 'lucide-angular';
import { IconHeaderComponent } from '../../components/icon-header/icon-header.component';
import { ServicePaymentCardComponent } from '../../components/service-payment-card/service-payment-card.component';
import { CommonModule } from '@angular/common';
import { NewServicePaymentComponent } from '../../components/modals/new-service-payment/new-service-payment.component';

@Component({
  selector: 'app-services',
  imports: [
    LucideAngularModule,
    IconHeaderComponent,
    ServicePaymentCardComponent,
    CommonModule,
    NewServicePaymentComponent,
  ],
  templateUrl: './services.component.html',
})
export class ServicesComponent {
  readonly Users = Users;
  readonly Chevronsright = ChevronsRight;
  readonly Chevronleft = ChevronsLeft;
  isModal: boolean = false;

  showModal() {
    this.isModal = !this.isModal;
  }

  medicalServices = [
    {
      id: 1,
      name: 'Consulta Clínica Geral',
      value: 150,
      status: true,
      updateat: '2025-04-01',
    },
    {
      id: 2,
      name: 'Exame de Sangue',
      value: 80,
      status: true,
      updateat: '2025-04-02',
    },
    { id: 3, name: 'Raio-X', value: 120, status: true, updateat: '2025-04-03' },
    {
      id: 4,
      name: 'Ultrassonografia',
      value: 200,
      status: true,
      updateat: '2025-04-03',
    },
    {
      id: 5,
      name: 'Eletrocardiograma',
      value: 100,
      status: false,
      updateat: '2025-04-04',
    },
    {
      id: 6,
      name: 'Consulta Pediátrica',
      value: 160,
      status: true,
      updateat: '2025-04-04',
    },
    {
      id: 7,
      name: 'Vacinação',
      value: 90,
      status: true,
      updateat: '2025-04-05',
    },
    {
      id: 8,
      name: 'Fisioterapia',
      value: 110,
      status: true,
      updateat: '2025-04-06',
    },
    {
      id: 9,
      name: 'Consulta Ginecológica',
      value: 170,
      status: true,
      updateat: '2025-04-07',
    },
    {
      id: 10,
      name: 'Exame de Urina',
      value: 70,
      status: false,
      updateat: '2025-04-08',
    },
  ];
}
