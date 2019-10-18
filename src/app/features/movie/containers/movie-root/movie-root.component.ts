import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MovieDetailsComponent } from '../../components/movie-details/movie-details.component';
import { addToFavorite } from '../../store/actions/movie.actions';
import { MovieState } from '../../store/reducers/movie.reducers';
import { getMovies } from '../../store/selectors/movie.selectors';
import { MovieInterface } from '../../types/movie.interface';

@Component({
    selector: 'app-movie-root',
    templateUrl: './movie-root.component.html',
    styleUrls: ['./movie-root.component.scss'],
})
export class MovieRootComponent implements OnInit {
    movies$: Observable<MovieInterface[]>;
    constructor(public dialog: MatDialog, private movieStore: Store<MovieState>) {}

    openDialog(movie?: MovieInterface): void {
        const dialogRef = this.dialog.open(MovieDetailsComponent, {
            width: '80vw',
            data: movie,
        });

        dialogRef.afterClosed().subscribe((result) => {
            console.log('The dialog was closed', result);
            this.movieStore.dispatch(addToFavorite({ data: result }));
        });
    }
    ngOnInit() {
        this.movies$ = this.movieStore.pipe(select(getMovies));

        this.movies$.subscribe((result) => console.log(result));
    }
}
