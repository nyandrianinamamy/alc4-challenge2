import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import { routeChange } from 'src/app/core/store/actions/router.actions';
import { MovieService } from '../../services/movie.service';
import * as MovieActions from './../actions/movie.actions';

@Injectable()
export class MovieEffects {
    constructor(
        private actions$: Actions,
        private movieService: MovieService,
        private router: Router,
    ) {}
    loadMovies$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MovieActions.loadMovies),
            switchMap((action) =>
                this.movieService.loadMovies(action.search).pipe(
                    map((movies) => MovieActions.loadMoviesSuccess({ data: movies })),
                    catchError((error) => of(MovieActions.loadMoviesFailure(error))),
                ),
            ),
        ),
    );

    loadMoviesSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MovieActions.loadMoviesSuccess),
            filter((action) => this.router.url.includes('favorites')),
            map((action) => MovieActions.loadFavorites()),
        ),
    );

    addToFavorite$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MovieActions.addToFavorite),
            switchMap((action) =>
                this.movieService
                    .insertToFavorites(action.data)
                    .pipe(map((result) => MovieActions.loadMovies({ search: null }))),
            ),
        ),
    );

    loadMoviesRoute$ = createEffect(() =>
        this.actions$.pipe(
            ofType(routeChange),
            filter((action) => action.path.includes('movies')),
            map((action) => MovieActions.loadMovies({ search: null })),
        ),
    );

    loadFavoritesRoute$ = createEffect(() =>
        this.actions$.pipe(
            ofType(routeChange),
            filter((action) => action.path.includes('favorites')),
            map((action) => MovieActions.loadMovies({ search: null })),
        ),
    );
}
