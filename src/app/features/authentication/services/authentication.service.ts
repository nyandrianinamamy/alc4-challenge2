import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { ApiResponse } from '../../../shared/types/api-response.interface';
import { User } from '../../access-management/types/user.interface';
import { AuthenticationServiceInterface } from './authentication-service-interface';

@Injectable()
export class AuthenticationService implements AuthenticationServiceInterface {
  constructor(private http: HttpClient) {}

  signIn(payload: {
    userName: string;
    password: string;
  }): Observable<{ user: User; token: string }> {
    return this.http
      .post(`${environment.baseUrl}/auth`, payload)
      .pipe(map((response: ApiResponse) => response.data));
  }
}
