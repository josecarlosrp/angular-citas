import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from '../../../models/usuario.model';

@Component({
  selector: 'app-form-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-usuario.html'
})
export class FormUsuarioComponent implements OnInit {
  usuario: Usuario = {
    email: '',
    contrasena: '',
    tipo_usuario: '',
    estatus: 'A',
    nombre_completo: '',
    sexo: '',
    telefono: '',
    dependencia: '',
    rol: ''
  };
  esEdicion = false;
  id: number | null = null;

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.esEdicion = true;
      this.usuarioService.getById(this.id).subscribe((data: any) => {
        this.usuario = data[0] || data;  // <-- agrega [0] || data
      });
    }
  }

  guardar() {
    if (this.esEdicion && this.id) {
      this.usuarioService.update(this.id, this.usuario).subscribe(() => {
        this.router.navigate(['/usuarios']);
      });
    } else {
      this.usuarioService.create(this.usuario).subscribe(() => {
        this.router.navigate(['/usuarios']);
      });
    }
  }
}