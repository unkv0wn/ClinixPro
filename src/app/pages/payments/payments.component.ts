import { Component } from '@angular/core';
import { IconHeaderComponent } from "../../components/icon-header/icon-header.component";
import { LucideAngularModule, Users } from 'lucide-angular';
import { CommonModule } from '@angular/common';
import { ServicePaymentCardComponent } from "../../components/service-payment-card/service-payment-card.component";

@Component({
  selector: 'app-payments',
  imports: [IconHeaderComponent, LucideAngularModule, CommonModule, ServicePaymentCardComponent],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.css'
})
export class PaymentsComponent {
  readonly Users = Users

  paymentMethods = [
    {
      id: 0,
      status: true,
      name: "Cartao de Debito",
      abreviation: "CD",
      updateat: "22/02/2022",
      isPayment: true
    },
    {
      id: 1,
      status: true,
      name: "Cartao de Credito",
      abreviation: "CC",
      updateat: "23/02/2022",
      isPayment: true
    },
    {
      id: 2,
      status: false,
      name: "Dinheiro",
      abreviation: "DIN",
      updateat: "15/01/2022",
      isPayment: true
    },
    {
      id: 3,
      status: true,
      name: "Pix",
      abreviation: "PIX",
      updateat: "05/03/2022",
      isPayment: true
    },
    {
      id: 4,
      status: false,
      name: "Transferencia Bancaria",
      abreviation: "TB",
      updateat: "10/04/2022",
      isPayment: true
    },
    {
      id: 5,
      status: true,
      name: "Cheque",
      abreviation: "CHQ",
      updateat: "18/05/2022",
      isPayment: true
    },
    {
      id: 6,
      status: false,
      name: "Boleto",
      abreviation: "BLT",
      updateat: "01/06/2022",
      isPayment: true
    },
    {
      id: 7,
      status: true,
      name: "Carteira Digital",
      abreviation: "CDG",
      updateat: "12/07/2022",
      isPayment: true
    },
    {
      id: 8,
      status: true,
      name: "Fiado",
      abreviation: "FIA",
      updateat: "20/08/2022",
      isPayment: true
    },
    {
      id: 9,
      status: true,
      name: "Outro",
      abreviation: "OUT",
      updateat: "30/09/2022",
      isPayment: true
    }
  ];
}
