import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MovieInterface } from '../../types/movie.interface';
import { movieFeatureKey, MovieState } from '../reducers/movie.reducers';

export const getMovieState = createFeatureSelector<MovieState>(movieFeatureKey);

export const getMovies = createSelector<MovieState, MovieState, MovieInterface[]>(
    getMovieState,
    (state: MovieState) => state.movies,
);
