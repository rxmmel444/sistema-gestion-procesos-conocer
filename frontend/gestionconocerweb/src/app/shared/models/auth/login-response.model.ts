export interface LoginResponse {
  success: boolean;
  message: string;
  data: LoginData | null;
}

export interface LoginData {
  idUsuario: number;
  usuario: string;
  nombreCompleto: string;
  roles: string[];
}