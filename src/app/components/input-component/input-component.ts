import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-component.html',
  styleUrl: './input-component.css',
})
export class InputComponent {

  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() imageUrl: string = '';

  @Output() valueChange = new EventEmitter<string>();
}
