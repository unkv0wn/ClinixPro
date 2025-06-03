import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Calendar1Icon,
  CheckCheck,
  Clock,
  LucideAngularModule,
  Search,
  X,
} from 'lucide-angular';

import { BasicCardComponent } from "../../components/basic-card/basic-card.component";

@Component({
  selector: 'app-scheduling',
  imports: [
    LucideAngularModule,
    CommonModule,
    BasicCardComponent
],
  templateUrl: './scheduling.component.html',
  styleUrl: './scheduling.component.css',
})
export class SchedulingComponent {
  readonly calendar = Calendar1Icon
  readonly Clock = Clock
  readonly check = CheckCheck
  readonly x = X
  readonly search = Search
}
