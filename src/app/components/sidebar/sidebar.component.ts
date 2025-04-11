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
  Users,
  IdCard,
  Stethoscope,
  HandCoins,
} from 'lucide-angular';
import { MenuButtonComponent } from '../menu-button/menu-button.component';
import { CommonModule } from '@angular/common';
import { MenuSection } from '../../models/menu/menu.model';

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
  /*Definindo os icones a ser usado na tela. */
  readonly ArrowBigLeft = ChevronLeft;
  readonly LayoutDashboard = LayoutDashboard;
  readonly NotbookText = NotebookText;
  readonly WalletCardsIcon = Banknote;
  readonly LogOut = LogOut;
  readonly MenuIcon = MenuIcon;
  readonly Users = Users;
  readonly IdCard = IdCard;
  readonly Stethoscope = Stethoscope;
  readonly HandCoins = HandCoins;

  /*Variaveis de estado */
  isSelected = false;
  isCollapsed = true;

  /*Definindo se esta em um mobile */
  isMobile = window.innerWidth < 640;

  /*Irá atualizar o valor conforme o tamanho da tela */
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobile = window.innerWidth < 640;
  }

  /*Irá alternar o estado da side bar entre expandida e recolhida */
  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  /**
   * Iniciando o ciclo do angular
   * O Propio Angular irá veficar se o usuario esta em uma tela pequena,
   * caso sim irá ocultar a exibição inicial da sidebar.
   **/
  ngOnInit() {
    this.checkIfMobile();
    window.addEventListener('resize', () => (this.isCollapsed = false));
  }

  checkIfMobile() {
    this.isMobile = window.innerWidth < 768;
    this.isCollapsed = false;
  }

  /**
   * Seçoes de side bar
   */

  sections: MenuSection[] = [
    {
      title: 'Painel Principal',
      items: [
        { text: 'Pagina principal', icon: LayoutDashboard, route: '/index' },
        { text: 'Agendamentos', icon: NotebookText, route: '/agendamentos' },
        { text: 'Financeiro', icon: Banknote, route: '/financeiro' },
      ],
    },
    {
      title: 'Cadastros',
      items: [
        { text: 'Pacientes', icon: Users, route: '/pacientes' },
        { text: 'Medicos', icon: IdCard, route: '/medicos' },
        { text: 'Serviços', icon: Stethoscope, route: '/financeiro' },
        { text: 'Pagamentos / Convenios', icon: HandCoins, route: '/index' },
      ],
    },
  ];
}
