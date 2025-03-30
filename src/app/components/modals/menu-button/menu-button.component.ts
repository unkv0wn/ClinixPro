import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, LayoutDashboard } from 'lucide-angular';

@Component({
  selector: 'MenuButton',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, RouterModule],
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.css'],
})
export class MenuButtonComponent {
  readonly LayoutDashboard = LayoutDashboard;

  @Input() buttonText: any = '';
  @Input() icon: any = LayoutDashboard;
  @Input() routerLink: string | any[] = [];
  @Input() isCollapsed: boolean | undefined; 


  constructor() {}
}
