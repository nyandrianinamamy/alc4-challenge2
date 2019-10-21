import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MovieDetailsComponent } from '../../components/movie-details/movie-details.component';
import { addToFavorite, loadMovies } from '../../store/actions/movie.actions';
import { MovieState } from '../../store/reducers/movie.reducers';
import { getMovies, getMoviesLoading } from '../../store/selectors/movie.selectors';
import { MovieInterface } from '../../types/movie.interface';

@Component({
    selector: 'app-movie-root',
    templateUrl: './movie-root.component.html',
    styleUrls: ['./movie-root.component.scss'],
})
export class MovieRootComponent implements OnInit {
    movies$: Observable<MovieInterface[]>;
    constructor(public dialog: MatDialog, private movieStore: Store<MovieState>) {}
    searchField: string;
    isLoading$: Observable<boolean>;

    openDialog(movie?: MovieInterface): void {
        const dialogRef = this.dialog.open(MovieDetailsComponent, {
            width: '80vw',
            data: movie,
        });

        dialogRef.afterClosed().subscribe((result) => {
            console.log('Data dialog dispatched');
            result && this.movieStore.dispatch(addToFavorite({ data: result }));
        });
    }
    ngOnInit() {
        this.movies$ = this.movieStore.pipe(select(getMovies));
        this.isLoading$ = this.movieStore.pipe(select(getMoviesLoading));
    }
    search() {
        this.movieStore.dispatch(loadMovies({ search: this.searchField }));
    }
}
