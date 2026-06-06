import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SalaService } from '../../../services/sala.service';
import { Sala } from '../../../models/sala.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-sala',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-sala.html'
})
export class FormSalaComponent implements OnInit {
  sala: Sala = { nombre_sala: '', id_edificio: 0, estatus: true };
  edificios: any[] = [];
  esEdicion = false;
  id: number | null = null;

  constructor(
    private salaService: SalaService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.http.get<any>('http://localhost:3000/api/edificios').subscribe((data: any) => {
      this.edificios = data.data || data;
    });

    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.esEdicion = true;
      this.salaService.getById(this.id).subscribe((data: any) => {
        this.sala = data;
      });
    }
  }

  guardar() {
    if (this.esEdicion && this.id) {
      this.salaService.update(this.id, this.sala).subscribe(() => {
        this.router.navigate(['/salas']);
      });
    } else {
      this.salaService.create(this.sala).subscribe(() => {
        this.router.navigate(['/salas']);
      });
    }
  }
}