import { Component, Input } from '@angular/core';

@Component({
  selector: 'forminput',
  standalone: true,
  imports: [],
  templateUrl: './input-field.component.html',
})
export class InputFieldComponent {
  @Input() type: string = 'text';
  @Input() label: string = 'ID';
  @Input() placeholder: string = '123';
  @Input() disabled: boolean = false;
  
}
