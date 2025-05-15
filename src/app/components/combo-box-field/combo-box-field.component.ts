import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChevronDown, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'ComboBoxField',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './combo-box-field.component.html',
})
export class ComboBoxFieldComponent {

  readonly ChevronDown = ChevronDown;

  @Input() label: string = 'Label';
  @Input() placeholder: string = 'Selecione uma opção';
  @Input() options: any[] = [];
  @Input() selectedValue: any;
  @Input() labelKey: string = 'nome'; // ou 'label', dependendo do seu objeto
  @Output() selectedValueChange = new EventEmitter<any>();
  isOpen: boolean = false;

  toggleOptions() {
    this.isOpen = !this.isOpen;
  }

}
