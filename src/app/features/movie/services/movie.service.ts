import { Observable, of } from 'rxjs';
import { MovieInterface } from '../types/movie.interface';
import { MovieServiceInterface } from './movie.service.interface';

export class MovieService implements MovieServiceInterface {
    loadMovies(): Observable<MovieInterface[]> {
        return of([]);
    }
    insertToFavorites(movie: MovieInterface): Observable<boolean> {
        return of(true);
    }
}
