import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LucideAngularModule, TrendingDown, TrendingUp } from 'lucide-angular';

@Component({
  selector: 'BasicCard',
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './basic-card.component.html',
})
export class BasicCardComponent {
  readonly trendinup = TrendingUp;
  readonly trendinDown = TrendingDown;

  @Input() title: string = '';
  @Input() status: 'positive' | 'negative' = 'positive';
  @Input() value: number = 0;
  @Input() percent: number = 0;
  @Input() icon?: any;
  @Input() iconColor: string = 'text-primary-500';
}
