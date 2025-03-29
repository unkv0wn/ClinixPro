import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import {
  LucideAngularModule,
  Clock,
  Plus,
  NotebookPen,
  ChevronLeft,
  ChevronDown,
  Pin,
  Trash2,
} from 'lucide-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [LucideAngularModule, CommonModule],
})
export class HomeComponent {
  readonly Clock = Clock;
  readonly Plus = Plus;
  readonly NotebookPen = NotebookPen;
  readonly ChevronLeft = ChevronLeft;
  readonly ChevronDown = ChevronDown;
  readonly Pin = Pin;
  readonly Trash = Trash2;

  date: Date[] | undefined;

  appointments = [
    {
      time: '08:00',
      paciente: 'João Silva',
      telefone: '11 98765-4321',
      tipoConsulta: 'Retorno',
      valorTotal: 100.00,
    },
    {
      time: '08:30',
      paciente: 'Maria Oliveira',
      telefone: '21 99876-5432',
      tipoConsulta: 'Exame de Sangue',
      valorTotal: 80.00,
    },
    {
      time: '09:00',
      paciente: 'Carlos Pereira',
      telefone: '31 97654-3210',
      tipoConsulta: 'Consulta de Rotina',
      valorTotal: 50.00,
    },
    {
      time: '11:00',
      paciente: 'Ana Souza',
      telefone: '41 96547-9875',
      tipoConsulta: 'Check-up',
      valorTotal: 120.00,
    },
    {
      time: '12:00',
      paciente: 'Pedro Santos',
      telefone: '51 93456-7890',
      tipoConsulta: 'Consulta de Rotina',
      valorTotal: 90.00,
    },
    // ...adicione mais conforme necessário
  ];

  notions = [
    { message: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
    { message: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
    { message: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
    { message: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
    { message: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
  ];

  isOpen: number | null = null;
  isRotated: boolean = false;

  showInfo(index: number) {
    this.isOpen = this.isOpen === index ? null : index;
    this.isRotated = !this.isRotated;
  }

  constructor(private cdr: ChangeDetectorRef) {}
}
