import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PuestoService } from '../../../services/puesto.service';
import { Puesto } from '../../../models/puesto.model';

@Component({
  selector: 'app-form-puesto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-puesto.html'
})
export class FormPuestoComponent implements OnInit {
  puesto: Puesto = { nombre_puesto: '', estatus: true };
  esEdicion = false;
  id: number | null = null;

  constructor(
    private puestoService: PuestoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.esEdicion = true;
      this.puestoService.getById(this.id).subscribe((data: any) => {
        this.puesto = data;
      });
    }
  }

  guardar() {
    if (this.esEdicion && this.id) {
      this.puestoService.update(this.id, this.puesto).subscribe(() => {
        this.router.navigate(['/puestos']);
      });
    } else {
      this.puestoService.create(this.puesto).subscribe(() => {
        this.router.navigate(['/puestos']);
      });
    }
  }
}