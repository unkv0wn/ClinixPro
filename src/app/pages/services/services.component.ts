import { Component } from '@angular/core';
import { LucideAngularModule, Users } from 'lucide-angular';
import { IconHeaderComponent } from '../../components/icon-header/icon-header.component';
import { ServicePaymentCardComponent } from "../../components/service-payment-card/service-payment-card.component";

@Component({
  selector: 'app-services',
  imports: [LucideAngularModule, IconHeaderComponent, ServicePaymentCardComponent],
  templateUrl: './services.component.html',
})
export class ServicesComponent {
  readonly Users = Users;
}
