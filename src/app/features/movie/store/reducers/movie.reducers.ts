import { HttpErrorResponse } from '@angular/common/http';
import { Action, createReducer, on } from '@ngrx/store';
import { MovieInterface } from '../../types/movie.interface';
import * as MovieActions from '../actions/movie.actions';

export interface MovieState {
    movies: MovieInterface[];
    favorites: MovieInterface[];
    moviesLoaded: boolean;
    moviesLoading: boolean;
    error: HttpErrorResponse;
}

export const initialState: MovieState = {
    movies: [],
    favorites: [],
    moviesLoaded: false,
    moviesLoading: false,
    error: undefined,
};

const movieReducer = createReducer(
    initialState,
    on(MovieActions.loadMovies, (state) => ({ ...state, moviesLoading: true })),
    on(MovieActions.loadMoviesSuccess, (state, { data }) => ({
        ...state,
        movies: data,
        moviesLoading: false,
        moviesLoaded: true,
    })),
    on(MovieActions.loadMoviesFailure, (state, { error }) => ({
        ...state,
        moviesLoading: false,
        moviesLoaded: false,
        error: error,
    })),
    // on(MovieActions.loadFavoritesSuccess, (state, { data }) => ({
    //     ...state,
    //     movies: [...state.movies.filter((m) => data.some((d) => m.Id === d.Id))],
    // })),
    on(MovieActions.loadFavorites, (state) => ({
        ...state,
        movies: state.movies.filter((m) => m.isFavorite),
    })),
);

export function reducer(state: MovieState | undefined, action: Action) {
    return movieReducer(state, action);
}

export const movieFeatureKey = 'movie';
