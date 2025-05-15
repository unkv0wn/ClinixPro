import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LucideAngularModule,
  Users,
  Camera,
  Search,
  Trash2,
  Printer,
  FileText,
  Plus,
} from 'lucide-angular';
import { IconHeaderComponent } from '../../components/icon-header/icon-header.component';
import { NewConsultComponent } from '../../components/modals/new-consult/new-consult.component';

@Component({
  selector: 'app-scheduling',
  imports: [
    LucideAngularModule,
    CommonModule,
    IconHeaderComponent,
    NewConsultComponent,
  ],
  templateUrl: './scheduling.component.html',
  styleUrl: './scheduling.component.css',
})
export class SchedulingComponent {
  readonly Users = Users;
  readonly Camera = Camera;
  readonly Seach = Search;
  readonly Trash = Trash2;
  readonly Printer = Printer;
  readonly TableOfContents = FileText;
  readonly Plus = Plus;

  isModal: boolean = false;
  isModalConsult: boolean = false;

  notions = [
    { message: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
    { message: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
    { message: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
    { message: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
    { message: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
    { message: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
    { message: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
    { message: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
    { message: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
    { message: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
    { message: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
    { message: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
    { message: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
    { message: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
    { message: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
  ];

  ShowModalConsult() {
    this.isModalConsult = !this.isModalConsult;
  }
}
