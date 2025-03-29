import { Component, HostListener } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import {
  LucideAngularModule,
  ChevronLeft,
  LayoutDashboard,
  NotebookText,
  Banknote,
  LogOut,
  MenuIcon,
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
  readonly MenuIcon = MenuIcon;
  isSelected = false;
  isCollapsed = true;

  isMobile = window.innerWidth < 640; // Define se está em mobile

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobile = window.innerWidth < 640; // Atualiza ao redimensionar
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit() {
    this.checkIfMobile();
    window.addEventListener('resize', () => this.checkIfMobile());
  }
  
  checkIfMobile() {
    this.isMobile = window.innerWidth < 768; // Ajuste o valor conforme necessário
    if (this.isMobile) {
      this.isCollapsed = false; // Oculta a sidebar no mobile
    } else {
      this.isCollapsed = false; // Mostra a sidebar no desktop
    }
  }
}
