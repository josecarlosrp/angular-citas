import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PacienteService } from '../../../services/paciente.service';
import { Paciente } from '../../../models/paciente.model';

@Component({
  selector: 'app-lista-pacientes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-pacientes.html'
})
export class ListaPacientesComponent implements OnInit {
  pacientes: Paciente[] = [];

  constructor(private pacienteService: PacienteService) {}

  ngOnInit() {
    this.cargarPacientes();
  }

  cargarPacientes() {
    this.pacienteService.getAll().subscribe((data: any) => {
      this.pacientes = data.data || data;
    });
  }

  eliminar(id: number) {
    if (confirm('¿Estás seguro de eliminar este paciente?')) {
      this.pacienteService.delete(id).subscribe(() => {
        this.cargarPacientes();
      });
    }
  }
}