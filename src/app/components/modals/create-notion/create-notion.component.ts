import { Component, EventEmitter, Output } from '@angular/core';
import { IconHeaderComponent } from "../../icon-header/icon-header.component";
import { LucideAngularModule, Pen, Trash2 } from 'lucide-angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-notion',
  imports: [IconHeaderComponent, LucideAngularModule, FormsModule],
  templateUrl: './create-notion.component.html'
})
export class CreateNotionComponent {

  readonly Pen = Pen;

  note: string = '';

  @Output() closed = new EventEmitter<void>();

  stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }

  closeModal() {
    console.log('Fechando modal...');
    this.closed.emit();
  }

  showMessage() {
    if (this.note.trim() === '') {
      console.log('Nota não pode ser vazia!');
    } else {
      console.log('Nota criada:', this.note);
      this.note = ''; // Limpa o campo após criar a nota
      this.closed.emit(); // Emite o evento de fechamento do modal
    }
  }

}
