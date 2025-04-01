import { Component, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'IconHeader',
  imports: [LucideAngularModule],
  templateUrl: './icon-header.component.html',
})
export class IconHeaderComponent {
  @Input() Icon: any = '';
  @Input() Title!: string;
}
