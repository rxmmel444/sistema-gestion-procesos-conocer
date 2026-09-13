import { Component,forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'app-ui-input',
  imports: [],
  templateUrl: './ui-input.html',
  styleUrl: './ui-input.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UiInput),
      multi: true,
    }
  ]
})
export class UiInput implements ControlValueAccessor {

  @Input() id = '';
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type = 'text';
  @Input() autocomplete = 'off';

  value: string = '';
  disabled: boolean = false;
  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {}

  writeValue(value: string): void{
    this.value = value ?? '';
  }

  registerOnChange(fn: (value: string) => void): void{
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void{
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void{
    this.disabled = isDisabled;
  }
  handleInput(event: Event): void{
    const inputElement = event.target as HTMLInputElement;
    this.value = inputElement.value;
    this.onChange(this.value);
  }

  blur(): void{
    this.onTouched();
  }
}
