import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PuestoService } from '../../../services/puesto.service';
import { Puesto } from '../../../models/puesto.model';

@Component({
  selector: 'app-lista-puestos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-puestos.html'
})
export class ListaPuestosComponent implements OnInit {
  puestos: Puesto[] = [];

  constructor(private puestoService: PuestoService) {}

  ngOnInit() {
    this.cargarPuestos();
  }

  cargarPuestos() {
    this.puestoService.getAll().subscribe((data: any) => {
      this.puestos = data.data || data;
    });
  }

  eliminar(id: number) {
    if (confirm('¿Estás seguro de eliminar este puesto?')) {
      this.puestoService.delete(id).subscribe(() => {
        this.cargarPuestos();
      });
    }
  }
}