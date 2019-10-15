import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { User } from '../../access-management/types/user.interface';
import { AuthenticationResponse } from '../types/authentication-response.interface';
import { AuthenticationServiceInterface } from './authentication-service-interface';

@Injectable()
export class AuthenticationMockService
  implements AuthenticationServiceInterface {
  constructor(private http: HttpClient) {}

  signIn(payload: {
    userName: string;
    password: string;
  }): Observable<AuthenticationResponse> {
    return this.http.get(`${environment.baseUrl}/users`).pipe(
      map((users: User[]) =>
        users.find((u) => u.userName === payload.userName),
      ),
      map((user: User) => ({ user, token: 'token' })),
    );
  }
}
