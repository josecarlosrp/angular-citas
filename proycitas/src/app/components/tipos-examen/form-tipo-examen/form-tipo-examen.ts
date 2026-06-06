import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoExamenService } from '../../../services/tipo-examen.service';
import { TipoExamen } from '../../../models/tipo-examen.model';

@Component({
  selector: 'app-form-tipo-examen',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-tipo-examen.html'
})
export class FormTipoExamenComponent implements OnInit {
  tipoExamen: TipoExamen = { nombre_corto: '', estatus: true };
  esEdicion = false;
  id: number | null = null;

  constructor(
    private tipoExamenService: TipoExamenService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.esEdicion = true;
      this.tipoExamenService.getById(this.id).subscribe((data: any) => {
        this.tipoExamen = data;
      });
    }
  }

  guardar() {
    if (this.esEdicion && this.id) {
      this.tipoExamenService.update(this.id, this.tipoExamen).subscribe(() => {
        this.router.navigate(['/tipos-examen']);
      });
    } else {
      this.tipoExamenService.create(this.tipoExamen).subscribe(() => {
        this.router.navigate(['/tipos-examen']);
      });
    }
  }
}