import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sala } from '../models/sala.model';

@Injectable({ providedIn: 'root' })
export class SalaService {
  private url = 'http://localhost:3000/api/salas';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.url);
  }

  getById(id: number): Observable<Sala> {
    return this.http.get<Sala>(`${this.url}/${id}`);
  }

  create(sala: Sala): Observable<any> {
    return this.http.post(this.url, sala);
  }

  update(id: number, sala: Sala): Observable<any> {
    return this.http.patch(`${this.url}/${id}`, sala);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}