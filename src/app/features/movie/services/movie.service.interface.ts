import { Observable } from 'rxjs';
import { MovieInterface } from '../types/movie.interface';

export interface MovieServiceInterface {
  loadMovies(): Observable<MovieInterface[]>;
}
