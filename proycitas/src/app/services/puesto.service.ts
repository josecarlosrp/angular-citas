import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Puesto } from '../models/puesto.model';

@Injectable({ providedIn: 'root' })
export class PuestoService {
  private url = 'http://localhost:3000/api/puestos';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.url);
  }

  getById(id: number): Observable<Puesto> {
    return this.http.get<Puesto>(`${this.url}/${id}`);
  }

  create(puesto: Puesto): Observable<any> {
    return this.http.post(this.url, puesto);
  }

  update(id: number, puesto: Puesto): Observable<any> {
    return this.http.patch(`${this.url}/${id}`, puesto);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}