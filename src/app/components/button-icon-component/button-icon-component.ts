import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-icon-component',
  standalone: true,
  templateUrl: './button-icon-component.html',
  styleUrl: './button-icon-component.css'
})

export class ButtonIconComponent {
  @Input() imageUrl: string = "";
}
