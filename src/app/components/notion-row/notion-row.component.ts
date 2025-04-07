import { Component, Input } from '@angular/core';
import { LucideAngularModule, Trash2 } from 'lucide-angular';
import { DeleteNotionComponent } from "../modals/delete-notion/delete-notion.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'NotionRow',
  imports: [LucideAngularModule, DeleteNotionComponent, CommonModule],
  templateUrl: './notion-row.component.html',
})
export class NotionRowComponent {

  readonly Trash = Trash2
  
  isModal: boolean = false; 

  @Input() notion!: any;  // Mensagem da anotação
  @Input() index!: number; // Index da anotação

  showModal() {
    this.isModal = !this.isModal;
  }

}
