import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MovieInterface } from '../../types/movie.interface';

@Component({
    selector: 'app-movie-details',
    templateUrl: './movie-details.component.html',
    styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
    constructor(
        public dialogRef: MatDialogRef<MovieDetailsComponent>,
        @Inject(MAT_DIALOG_DATA) public data: MovieInterface,
    ) {
        this.isFavorite = data.isFavorite;
    }

    isFavorite: boolean;

    onNoClick(): void {
        this.dialogRef.close();
    }
    onSubmit(data: any): void {
        this.isFavorite = !this.isFavorite;
        setTimeout(() => this.dialogRef.close(data), 300);
    }
    ngOnInit() {}
}
