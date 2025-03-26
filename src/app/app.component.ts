import { Component } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { IndexComponent } from './pages/index/index.component';

@Component({
  selector: 'app-root',
  imports: [IndexComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ClinxPRO';
}
