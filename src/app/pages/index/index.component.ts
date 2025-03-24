import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-index',
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './index.component.html',

})
export class IndexComponent {


}
