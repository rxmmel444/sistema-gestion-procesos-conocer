import { Component } from '@angular/core';
import { UiButton } from '../../../atoms/ui-button/ui-button';
import { UiInputPassword } from '../../../atoms/ui-input-password/ui-input-password';
import { UiInputLogin } from '../../../atoms/ui-input-login/ui-input-login';
import { UiInput } from '../../../atoms/ui-input/ui-input';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  imports: [
    ReactiveFormsModule,
    UiInput,
    UiInputPassword,
    UiButton,
  ],
  templateUrl: './login-screen.html',
  styleUrl: './login-screen.scss',
})
export class LoginScreen {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get usuarioInvalido(): boolean {
    const control = this.loginForm.get('usuario');
    return !!control && control.invalid && control.touched;
  }

  get passwordInvalido(): boolean {
    const control = this.loginForm.get('password');
    return !!control && control.invalid && control.touched;
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    console.log('Login correcto temporal:', this.loginForm.value);

    this.router.navigate(['/home']);
  }
}