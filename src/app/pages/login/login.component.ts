import { Component } from '@angular/core';
import { LogoComponent } from '../../components/logo/logo.component';
import { LucideAngularModule, Eye, EyeClosed } from 'lucide-angular'; // Importar ícones do Lucide
import { FormsModule } from '@angular/forms'; // Importar FormsModule para two-way binding


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LucideAngularModule, LogoComponent, FormsModule], // Importando o módulo e o componente
  templateUrl: './login.component.html',
})
export class LoginComponent {
  readonly EyeOpen = Eye;
  readonly EyeClosed = EyeClosed;

  isPasswordVisible: boolean = true;
  username: string = '';
  password: string = '';

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible; // Alterna o estado
  }

  onSubmit() {
    console.log('Usuário:', this.username);
    console.log('Senha:', this.password);
    //Router.navigate(['/index']);
  }

}
