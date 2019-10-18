import { Observable } from 'rxjs';
import { MovieInterface } from '../types/movie.interface';

export interface MovieServiceInterface {
    loadMovies(search?: string): Observable<MovieInterface[]>;
    insertToFavorites(movie: MovieInterface): Observable<boolean>;
}
