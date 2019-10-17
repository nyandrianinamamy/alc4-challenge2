import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { MovieInterface } from '../../types/movie.interface';

export const loadMovies = createAction('[MOVIE] Load Movies');
export const loadMoviesSuccess = createAction(
    '[Movie] Load Movies Success',
    props<{ data: MovieInterface[] }>(),
);
export const loadMoviesFailure = createAction(
    '[Movie] Load Movies Failure',
    props<{ error: HttpErrorResponse }>(),
);
