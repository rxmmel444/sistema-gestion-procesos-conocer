import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRequest } from '../../models/auth/login-request.model';
import { LoginResponse } from '../../models/auth/login-response.model';

export interface TokenResponse{
  access_token: string;
  token_type: string;
  expires_in: number;
  userName: string;
  issued: string;
  expires: string;
}
@Injectable({
  providedIn: 'root'
})
export class Auth {
  private readonly tokenUrl = '/Token';

  constructor(private http: HttpClient) {}

  login(usuario: string, password: string): Observable<TokenResponse> {

    // Cuerpo de la peticion en formato application/x-www-form-urlencoded.
// No se envía JSON porque el endpoint /Token de ASP.NET Identity espera formato OAuth.
    const request = new URLSearchParams();
    request.set('grant_type', 'password');
    request.set('username', usuario);
    request.set('password', password);
    

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    // El endpoint /Token requiere application/x-www-form-urlencoded, no JSON
    return this.http.post<TokenResponse>(`${this.tokenUrl}`, request.toString(), { headers });
  }
}