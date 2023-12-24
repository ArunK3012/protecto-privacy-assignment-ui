import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  sendEmail(data: { to: any; subject: string; html: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/send-email`, data);
  }
}
