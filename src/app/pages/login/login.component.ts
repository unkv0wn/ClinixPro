import { Component } from '@angular/core';
import { LogoComponent } from '../../components/logo/logo.component';
import { LucideAngularModule, Eye, EyeClosed, Route } from 'lucide-angular'; 
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LucideAngularModule, LogoComponent, FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  readonly EyeOpen = Eye;
  readonly EyeClosed = EyeClosed;

  isPasswordVisible: boolean = true;
  username: string = '';
  password: string = '';

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible; 
  }
  constructor(private router: Router) {}

  login() {
    // Aqui você pode adicionar a lógica de autenticação
    // Por exemplo, verificar se o usuário e a senha estão corretos
    // Se estiverem corretos, redirecionar para outra página
    console.log('Login:', this.username, this.password);
    this.router.navigate(['/index']); // Redireciona para a página inicial após o login
  }

}
