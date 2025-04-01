import { Component, Input } from '@angular/core';
import { LucideAngularModule, Trash2 } from 'lucide-angular';

@Component({
  selector: 'NotionRow',
  imports: [LucideAngularModule],
  templateUrl: './notion-row.component.html',
})
export class NotionRowComponent {

  readonly Trash = Trash2

  @Input() notion!: any;  // Mensagem da anotação


}
