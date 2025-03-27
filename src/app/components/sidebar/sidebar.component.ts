import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import {
  LucideAngularModule,
  ChevronLeft,
  LayoutDashboard,
  NotebookText,
  Banknote,
  LogOut,
} from 'lucide-angular';
import { MenuButtonComponent } from '../modals/menu-button/menu-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [
    LogoComponent,
    LucideAngularModule,
    MenuButtonComponent,
    CommonModule,
  ],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  readonly ArrowBigLeft = ChevronLeft;
  readonly LayoutDashboard = LayoutDashboard;
  readonly NotbookText = NotebookText;
  readonly WalletCardsIcon = Banknote;
  readonly LogOut = LogOut;
  isSelected = false;

  isCollapsed = false;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  alertaa() {
    this.isSelected = !this.isSelected;
    alert('Clicou no botão!');
  }
}
