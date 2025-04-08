import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from 'lucide-angular';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ClinxPRO';
}
