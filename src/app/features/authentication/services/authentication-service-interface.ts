import { Observable } from 'rxjs';
import { AuthenticationResponse } from '../types/authentication-response.interface';

export interface AuthenticationServiceInterface {
  signIn(payload: {
    userName: string;
    password: string;
  }): Observable<AuthenticationResponse>;
}
