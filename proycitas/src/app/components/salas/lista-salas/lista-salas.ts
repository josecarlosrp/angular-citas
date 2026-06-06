import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SalaService } from '../../../services/sala.service';
import { Sala } from '../../../models/sala.model';

@Component({
  selector: 'app-lista-salas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-salas.html'
})
export class ListaSalasComponent implements OnInit {
  salas: Sala[] = [];

  constructor(private salaService: SalaService) {}

  ngOnInit() {
    this.cargarSalas();
  }

  cargarSalas() {
    this.salaService.getAll().subscribe((data: any) => {
      this.salas = data.data || data;
    });
  }

  eliminar(id: number) {
    if (confirm('¿Estás seguro de eliminar esta sala?')) {
      this.salaService.delete(id).subscribe(() => {
        this.cargarSalas();
      });
    }
  }
}