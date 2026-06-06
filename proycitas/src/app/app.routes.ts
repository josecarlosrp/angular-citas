import { Routes } from '@angular/router';

// Puestos
import { ListaPuestosComponent } from './components/puestos/lista-puestos/lista-puestos';
import { FormPuestoComponent } from './components/puestos/form-puesto/form-puesto';

// Usuarios
import { ListaUsuariosComponent } from './components/usuarios/lista-usuarios/lista-usuarios';
import { FormUsuarioComponent } from './components/usuarios/form-usuario/form-usuario';

// Pacientes
import { ListaPacientesComponent } from './components/pacientes/lista-pacientes/lista-pacientes';
import { FormPacienteComponent } from './components/pacientes/form-paciente/form-paciente';

// Salas
import { ListaSalasComponent } from './components/salas/lista-salas/lista-salas';
import { FormSalaComponent } from './components/salas/form-sala/form-sala';

// Tipos Examen
import { ListaTiposExamenComponent } from './components/tipos-examen/lista-tipos-examen/lista-tipos-examen';
import { FormTipoExamenComponent } from './components/tipos-examen/form-tipo-examen/form-tipo-examen';

export const routes: Routes = [
  { path: '', redirectTo: '/puestos', pathMatch: 'full' },

  // Puestos
  { path: 'puestos', component: ListaPuestosComponent },
  { path: 'puestos/nuevo', component: FormPuestoComponent },
  { path: 'puestos/editar/:id', component: FormPuestoComponent },

  // Usuarios
  { path: 'usuarios', component: ListaUsuariosComponent },
  { path: 'usuarios/nuevo', component: FormUsuarioComponent },
  { path: 'usuarios/editar/:id', component: FormUsuarioComponent },

  // Pacientes
  { path: 'pacientes', component: ListaPacientesComponent },
  { path: 'pacientes/nuevo', component: FormPacienteComponent },
  { path: 'pacientes/editar/:id', component: FormPacienteComponent },

  // Salas
  { path: 'salas', component: ListaSalasComponent },
  { path: 'salas/nuevo', component: FormSalaComponent },
  { path: 'salas/editar/:id', component: FormSalaComponent },

  // Tipos Examen
  { path: 'tipos-examen', component: ListaTiposExamenComponent },
  { path: 'tipos-examen/nuevo', component: FormTipoExamenComponent },
  { path: 'tipos-examen/editar/:id', component: FormTipoExamenComponent },
];