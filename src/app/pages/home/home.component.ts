import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
import { IconHeaderComponent } from '../../components/icon-header/icon-header.component';
import { NotionRowComponent } from '../../components/notion-row/notion-row.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [
    LucideAngularModule,
    IconHeaderComponent,
    NotionRowComponent,
    CommonModule
  ],
})
export class HomeComponent {
  /*Definindo icones a ser usado na pagina */
  readonly Clock = Clock;
  readonly Plus = Plus;
  readonly NotebookPen = NotebookPen;
  readonly ChevronLeft = ChevronLeft;
  readonly ChevronDown = ChevronDown;
  readonly Pin = Pin;
  readonly Trash = Trash2;

  /*Definição das variaveis */
  isOpen: number | null = null;
  isRotated: boolean = false;
  isModal: boolean = false;

  /*Inicia instacia de mockup de dados como desmontração de uso serviço para os agendamentos */
  appointments = [
    {
      time: '08:00',
      paciente: 'João Silva',
      telefone: '11 98765-4321',
      tipoConsulta: 'Retorno',
      valorTotal: 100.0,
    },
    {
      time: '08:30',
      paciente: 'Maria Oliveira',
      telefone: '21 99876-5432',
      tipoConsulta: 'Exame de Sangue',
      valorTotal: 80.0,
    },
    {
      time: '09:00',
      paciente: 'Carlos Pereira',
      telefone: '31 97654-3210',
      tipoConsulta: 'Consulta de Rotina',
      valorTotal: 50.0,
    },
    {
      time: '11:00',
      paciente: 'Ana Souza',
      telefone: '41 96547-9875',
      tipoConsulta: 'Check-up',
      valorTotal: 120.0,
    },
    {
      time: '12:00',
      paciente: 'Pedro Santos',
      telefone: '51 93456-7890',
      tipoConsulta: 'Consulta de Rotina',
      valorTotal: 90.0,
    },
  ];

  /*Inicia instacia de mockup de dados como desmontração de uso serviço para os anotações */
  notions = [
    { message: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
    { message: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
    { message: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
    { message: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
    { message: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
  ];

  /**
   * Está função indica uma função de mostrar o detalhe dos agendamentos de acordo com o index clicado
   * sendo mostrado de acordo com o indece declarado no json acima e instanciando a rotação de animação
   * do icone
   */
  showInfo(index: number) {
    this.isOpen = this.isOpen === index ? null : index;
    this.isRotated = !this.isRotated;
  }


  

  constructor() {}
}
