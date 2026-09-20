import { Component } from '@angular/core';
import { UiButton } from '../../../atoms/ui-button/ui-button';
import { UiInputPassword } from '../../../atoms/ui-input-password/ui-input-password';
import { UiInputLogin } from '../../../atoms/ui-input-login/ui-input-login';
import { UiInput } from '../../../atoms/ui-input/ui-input';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth, TokenResponse } from '../../../../shared/services/auth/auth';
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
    private router: Router,
    private authService: Auth
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

    const { usuario, password } = this.loginForm.value;
// Consume el servicio de autenticacion para solicitar el token al backend
    this.authService.login(usuario, password).subscribe({
      next: (response: TokenResponse) => {
        console.log('Login correcto:', response);
        // Guardamos el token y datos básicos de sesion en localStorage
        localStorage.setItem('access_token', response.access_token);
        localStorage.setItem('token_type', response.token_type);
        localStorage.setItem('usuario', response.userName);
        // Redirige al Home después del login exitoso
        this.router.navigate(['/home']);
      
    },
    error: (error) => {
      console.error('Error en el login:', error);
    
    }
  });
}
}