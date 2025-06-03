import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Calendar1Icon,
  CheckCheck,
  Clock,
  LucideAngularModule,
  MoreHorizontalIcon,
  Search,
  X,
} from 'lucide-angular';

import { BasicCardComponent } from '../../components/basic-card/basic-card.component';
import { IconHeaderComponent } from '../../components/icon-header/icon-header.component';

@Component({
  selector: 'app-scheduling',
  imports: [
    LucideAngularModule,
    CommonModule,
    BasicCardComponent,
    IconHeaderComponent,
  ],
  templateUrl: './scheduling.component.html',
  styleUrl: './scheduling.component.css',
})
export class SchedulingComponent {
  readonly calendar = Calendar1Icon;
  readonly Clock = Clock;
  readonly check = CheckCheck;
  readonly x = X;
  readonly search = Search;
  readonly more = MoreHorizontalIcon;

  getStatusColor(status: string): string {
    switch (status) {
      case 'Agendada':
        return 'rounded-lg py-1 px-2 items-center justify-center bg-blue-100 text-blue-800';
      case 'Andamento':
        return 'rounded-lg py-1 px-2 items-center justify-center bg-yellow-100 text-yellow-800';
      case 'Concluída':
        return 'rounded-lg py-1 px-2 items-center justify-center bg-green-100 text-green-800';
      case 'Cancelada':
        return 'rounded-lg py-1 px-2 items-center justify-center bg-red-100 text-red-800';
      default:
        return 'rounded-lg py-1 px-2 items-center justify-center bg-gray-100 text-gray-800';
    }
  }
}
