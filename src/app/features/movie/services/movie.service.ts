import { Observable, of } from 'rxjs';
import { MovieInterface } from '../types/movie.interface';
import { MovieServiceInterface } from './movie.service.interface';

export class MovieService implements MovieServiceInterface {
    loadMovies(search?: string): Observable<MovieInterface[]> {
        return of([]);
    }
    insertToFavorites(movie: MovieInterface): Observable<boolean> {
        return of(true);
    }
}
