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
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }
    ngOnInit() {}
}
