import { Observable, of } from 'rxjs';
import { MOVIES_MOCK } from '../constants/movies.mock';
import { MovieInterface } from '../types/movie.interface';
import { MovieServiceInterface } from './movie.service.interface';

export class MovieMockService implements MovieServiceInterface {
  loadMovies(): Observable<MovieInterface[]> {
    return of(MOVIES_MOCK);
  }
}
