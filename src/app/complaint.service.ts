import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Complaint } from './complaint';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {
  private apiUrl = 'http://localhost:3000/complaints';

  constructor(private http: HttpClient) {}

  create(complaint: Complaint): Observable<Complaint> {
  return this.http.get<Complaint[]>(this.apiUrl).pipe(
    map((complaints) => {
      const maxId = complaints.length > 0
        ? Math.max(...complaints.map(c => c.id !== undefined ? +c.id : 0))
        : 0;

      complaint.id = maxId + 1;
      return complaint;
    }),
    switchMap(newComplaint =>
      this.http.post<Complaint>(this.apiUrl, newComplaint)
    )
  );
}

  getAll(): Observable<Complaint[]> {
    return this.http.get<Complaint[]>(this.apiUrl);
  }

  getById(id: number): Observable<Complaint> {
    return this.http.get<Complaint>(`${this.apiUrl}/${id}`);
  }

  update(id: number, complaint: Complaint): Observable<Complaint> {
    return this.http.put<Complaint>(`${this.apiUrl}/${id}`, complaint);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
