import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import { routeChange } from 'src/app/core/store/actions/router.actions';
import { MovieService } from '../../services/movie.service';
import * as MovieActions from './../actions/movie.actions';

@Injectable()
export class MovieEffects {
    constructor(private actions$: Actions, private movieService: MovieService) {}
    loadMovies$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MovieActions.loadMovies),
            switchMap((action) =>
                this.movieService.loadMovies().pipe(
                    map((movies) => MovieActions.loadMoviesSuccess({ data: movies })),
                    catchError((error) => of(MovieActions.loadMoviesFailure(error))),
                ),
            ),
        ),
    );

    loadMoviesRoute$ = createEffect(() =>
        this.actions$.pipe(
            ofType(routeChange),
            filter((action) => action.path.includes('movies')),
            map((action) => MovieActions.loadMovies()),
        ),
    );
}
