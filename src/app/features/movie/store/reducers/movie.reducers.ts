import { HttpErrorResponse } from '@angular/common/http';
import { Action, createReducer, on } from '@ngrx/store';
import { MovieInterface } from '../../types/movie.interface';
import * as MovieActions from '../actions/movie.actions';

export interface MovieState {
  movies: MovieInterface[];
  moviesLoaded: boolean;
  moviesLoading: boolean;
  error: HttpErrorResponse;
}

export const initialState: MovieState = {
  movies: [],
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
);

export function reducer(state: MovieState | undefined, action: Action) {
  return movieReducer(state, action);
}

export const movieFeatureKey = 'movie';
