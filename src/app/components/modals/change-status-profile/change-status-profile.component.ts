import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LucideAngularModule, Trash2 } from 'lucide-angular';
import { IconHeaderComponent } from "../../icon-header/icon-header.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ChangeStatusProfile',
  imports: [LucideAngularModule, IconHeaderComponent, CommonModule],
  templateUrl: './change-status-profile.component.html',
})
export class ChangeStatusProfileComponent {
  readonly Trash = Trash2;


  @Input() isMedical: boolean = false;
  @Input() isPatient: boolean = false;

  ngOnInit() {
    console.log('Modal aberta para index:');
  }

  @Output() closed = new EventEmitter<void>();

  stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }

  closeModal() {
    console.log('Fechando modal...');
    this.closed.emit();
  }

  deleteNotion() {
    console.log('Deletando anotação...');
    this.closed.emit();
  }
}
