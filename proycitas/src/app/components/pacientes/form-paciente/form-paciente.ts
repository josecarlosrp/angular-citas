import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from '../../../services/paciente.service';
import { Paciente } from '../../../models/paciente.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-paciente',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-paciente.html'
})
export class FormPacienteComponent implements OnInit {
  paciente: Paciente = {
    numero_expediente: '',
    fecha_nacimiento: '',
    alergias: '',
    antecedentes: ''
  };
  usuarios: any[] = [];
  esEdicion = false;
  id: number | null = null;

  constructor(
    private pacienteService: PacienteService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // Cargamos usuarios con rol paciente para asignar el id
    this.http.get<any>('http://localhost:3000/api/usuarios?_size=100').subscribe((data: any) => {
      const todos = data.data || data;
      this.usuarios = todos.filter((u: any) => u.rol === 'paciente');
    });

    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.esEdicion = true;
      this.pacienteService.getById(this.id).subscribe((data: any) => {
        this.paciente = data;
      });
    }
  }

  guardar() {
  const datos: any = {
    id_paciente: this.paciente.id_paciente,
    numero_expediente: this.paciente.numero_expediente,
    fecha_nacimiento: this.paciente.fecha_nacimiento,
    alergias: this.paciente.alergias || '',
    antecedentes: this.paciente.antecedentes || ''
  };

  if (this.esEdicion && this.id) {
    this.pacienteService.update(this.id, datos).subscribe(() => {
      this.router.navigate(['/pacientes']);
    });
  } else {
    this.pacienteService.create(datos).subscribe(() => {
      this.router.navigate(['/pacientes']);
    });
  }
}
}