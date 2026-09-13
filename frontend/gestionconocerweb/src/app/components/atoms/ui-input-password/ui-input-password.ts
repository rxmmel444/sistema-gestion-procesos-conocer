import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-ui-input-password',
  imports: [],
  templateUrl: './ui-input-password.html',
  styleUrl: './ui-input-password.scss',
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UiInputPassword),
      multi: true,
    }
  ]
})
export class UiInputPassword implements ControlValueAccessor {
  @Input() id = '';
  @Input() label = '';
  @Input() placeholder = '';
  @Input() autocomplete = 'current-password';

  value = '';
  disabled = false;
  showPassword = false;

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  get inputType(): string {
    return this.showPassword ? 'text' : 'password';
  }

  writeValue(value: string): void {
    this.value = value ?? '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  handleInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;

    this.value = inputElement.value;
    this.onChange(this.value);
  }

  handleBlur(): void {
    this.onTouched();
  }

  togglePasswordVisibility(): void {
    if (this.disabled) {
      return;
    }

    this.showPassword = !this.showPassword;
  }
}