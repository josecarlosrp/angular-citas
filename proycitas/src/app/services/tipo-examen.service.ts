import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoExamen } from '../models/tipo-examen.model';

@Injectable({ providedIn: 'root' })
export class TipoExamenService {
  private url = 'http://localhost:3000/api/tipos_examen';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.url);
  }

  getById(id: number): Observable<TipoExamen> {
    return this.http.get<TipoExamen>(`${this.url}/${id}`);
  }

  create(tipoExamen: TipoExamen): Observable<any> {
    return this.http.post(this.url, tipoExamen);
  }

  update(id: number, tipoExamen: TipoExamen): Observable<any> {
    return this.http.patch(`${this.url}/${id}`, tipoExamen);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}