export interface Paciente {
  id_paciente?: number;
  numero_expediente: string;
  fecha_nacimiento: string;
  alergias?: string;
  antecedentes?: string;
}