import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

@Injectable({ providedIn: 'root' })
export class UsuarioService {
  private url = 'http://localhost:3000/api/usuarios';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    //return this.http.get(this.url);
    return this.http.get(`${this.url}?_size=100`);
  }

  getById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.url}/${id}`);
  }

  create(usuario: Usuario): Observable<any> {
    return this.http.post(this.url, usuario);
  }

  update(id: number, usuario: Usuario): Observable<any> {
    return this.http.patch(`${this.url}/${id}`, usuario);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}