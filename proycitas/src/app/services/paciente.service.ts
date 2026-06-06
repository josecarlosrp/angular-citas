import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from '../models/paciente.model';

@Injectable({ providedIn: 'root' })
export class PacienteService {
  private url = 'http://localhost:3000/api/pacientes';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    //return this.http.get(this.url);
    return this.http.get(`${this.url}?_size=100`);
  }

  getById(id: number): Observable<Paciente> {
    return this.http.get<Paciente>(`${this.url}/${id}`);
  }

  create(paciente: Paciente): Observable<any> {
    return this.http.post(this.url, paciente);
  }

  update(id: number, paciente: Paciente): Observable<any> {
    return this.http.patch(`${this.url}/${id}`, paciente);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}