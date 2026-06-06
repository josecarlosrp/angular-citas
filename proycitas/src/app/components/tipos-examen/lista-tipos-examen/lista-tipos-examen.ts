import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TipoExamenService } from '../../../services/tipo-examen.service';
import { TipoExamen } from '../../../models/tipo-examen.model';

@Component({
  selector: 'app-lista-tipos-examen',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-tipos-examen.html'
})
export class ListaTiposExamenComponent implements OnInit {
  tiposExamen: TipoExamen[] = [];

  constructor(private tipoExamenService: TipoExamenService) {}

  ngOnInit() {
    this.cargarTipos();
  }

  cargarTipos() {
    this.tipoExamenService.getAll().subscribe((data: any) => {
      this.tiposExamen = data.data || data;
    });
  }

  eliminar(id: number) {
    if (confirm('¿Estás seguro de eliminar este tipo de examen?')) {
      this.tipoExamenService.delete(id).subscribe(() => {
        this.cargarTipos();
      });
    }
  }
}