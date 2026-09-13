import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ui-button',
  imports: [],
  templateUrl: './ui-button.html',
  styleUrl: './ui-button.scss',
})
export class UiButton {
  @Input() label = '';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() disabled = false;

  @Output() buttonClick = new EventEmitter<void>();

  handleClick(): void {
    if (this.disabled) {
      return;
    }

    this.buttonClick.emit();
  }
}