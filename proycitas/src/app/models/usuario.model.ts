export interface Usuario {
  id_usuario?: number;
  email: string;
  contrasena: string;
  tipo_usuario: string;
  estatus: string;
  nombre_completo: string;
  sexo?: string;
  telefono?: string;
  dependencia?: string;
  rol: string;
  id_departamento?: number;
}