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
  readonly more = MoreHorizontalIcon
}
