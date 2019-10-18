import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MovieInterface } from '../../types/movie.interface';

@Component({
    selector: 'app-movie-card',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
    @Input() movie: MovieInterface;
    @Output() view: EventEmitter<MovieInterface> = new EventEmitter<MovieInterface>();
    constructor() {}

    ngOnInit() {}
}
