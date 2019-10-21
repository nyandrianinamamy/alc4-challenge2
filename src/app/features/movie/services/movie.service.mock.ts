import * as Fuse from 'fuse.js';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { MOVIES_MOCK } from '../constants/movies.mock';
import { MovieInterface } from '../types/movie.interface';
import { MovieServiceInterface } from './movie.service.interface';
export class MovieMockService implements MovieServiceInterface {
    loadMovies(search?: string): Observable<MovieInterface[]> {
        const favorites = this.getSavedFavorites();
        let res = [];
        //Add isFavorite keys if movies is favorite on session
        res = MOVIES_MOCK.map((mm) => ({
            ...mm,
            isFavorite: !!favorites.some((id) => id === mm.Id),
        }));

        if (search) {
            const options = {
                keys: ['Title', 'Year'],
                id: 'Id',
            };
            const fuse = new Fuse(res, options);

            const searched = fuse.search(search);

            res = res.filter((r) => searched.some((s) => s === r.Id));
        }
        return of(res).pipe(delay(1000));
    }
    getSavedFavorites(): [] {
        return JSON.parse(sessionStorage.getItem('favorites')) || [];
    }
    insertToFavorites(movie: MovieInterface): Observable<boolean> {
        if (movie) {
            let moviesId: string[] = JSON.parse(sessionStorage.getItem('favorites')) || [];
            if (moviesId.length === 0 || !moviesId.some((id) => id === movie.Id)) {
                moviesId.push(movie.Id);
            } else {
                moviesId = moviesId.filter((id) => id !== movie.Id);
            }
            sessionStorage.setItem('favorites', JSON.stringify(moviesId));
            return of(true);
        }
    }
}
