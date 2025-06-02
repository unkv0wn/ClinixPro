
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Cake, Heart, LucideAngularModule, Map, Mars, PawPrint, Phone, TrendingDown, TrendingUp, User } from 'lucide-angular';
@Component({
  selector: 'ConsultCard',
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './consult-card.component.html',
  styleUrl: './consult-card.component.css'
})
export class ConsultCardComponent {
  readonly paw = PawPrint;
  readonly trendinup = TrendingUp;
  readonly trendinDown = TrendingDown;
  readonly heart = Heart;
  readonly Cake = Cake;
  readonly mars = Mars;
  readonly map = Map;
  readonly user = User;
  readonly phoneIcon = Phone;

  @Input() status: 'pending' | 'completed' = 'pending';
  @Input() name: string = '';
  @Input() age: number = 0;
  @Input() gender: string = '';
  @Input() location: string = '';
  @Input() adopter: string = '';
  @Input() phone: string = '';
  @Input() photoUrl: string = '';
}
