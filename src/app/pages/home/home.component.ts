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
    { time: '08:00' },
    { time: '08:30' },
    { time: '09:00' },
    { time: '11:00' },
    { time: '12:00' },
    // ...add more appointments as needed
  ];

  notions = [
    { message: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
    { message: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
    { message: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
    { message: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
    { message: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
  ];



  constructor() {}
}
