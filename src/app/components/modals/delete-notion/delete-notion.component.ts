import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconHeaderComponent } from "../../icon-header/icon-header.component";
import { LucideAngularModule, Trash2 } from 'lucide-angular';

@Component({
  selector: 'app-delete-notion',
  imports: [CommonModule, IconHeaderComponent, LucideAngularModule],
  templateUrl: './delete-notion.component.html',
})
export class DeleteNotionComponent  implements OnInit {

  readonly Trash = Trash2;

  ngOnInit() {
    console.log('Modal aberta para index:', this.index);
  }

  @Input() index!: number; 
  @Output() closed = new EventEmitter<void>();

  stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }

  closeModal() {
    console.log('Fechando modal...');
    this.closed.emit();
  }

  deleteNotion() {
    console.log('Deletando anotação...', this.index);
    this.closed.emit();
  }

}
