import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Partner } from '../../models/partner.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PartnerService {
  private readonly apiUrl = `${environment.apiUrl}/partners`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Partner[]> {
    return this.http.get<Partner[]>(this.apiUrl);
  }

  getById(id: number): Observable<Partner> {
    return this.http.get<Partner>(`${this.apiUrl}/${id}`);
  }

  create(partner: Partner): Observable<Partner> {
    return this.http.post<Partner>(this.apiUrl, partner);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
