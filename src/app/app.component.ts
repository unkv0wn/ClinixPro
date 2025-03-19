import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogoComponent } from "./components/logo/logo.component";

@Component({
  selector: 'app-root',
  imports: [/*RouterOutlet*/ LogoComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ClinxPRO';
}
