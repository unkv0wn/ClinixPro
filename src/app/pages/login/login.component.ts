import { Component } from '@angular/core';
import { LogoComponent } from '../../components/logo/logo.component';
import { LucideAngularModule, Eye, EyeClosed } from 'lucide-angular'; 
import { FormsModule } from '@angular/forms'; 


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

  onSubmit() {
    console.log('Usuário:', this.username);
    console.log('Senha:', this.password);
  }

}
