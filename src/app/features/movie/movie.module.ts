import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/shared/shared.module';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieRootComponent } from './containers/movie-root/movie-root.component';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieService } from './services/movie.service';
import { MovieMockService } from './services/movie.service.mock';
import { MovieEffects } from './store/effects/movie.effects';
import * as fromMovie from './store/reducers/movie.reducers';

@NgModule({
    declarations: [MovieRootComponent, MovieDetailsComponent, MovieListComponent],
    imports: [
        CommonModule,
        MovieRoutingModule,
        SharedModule,
        StoreModule.forFeature(fromMovie.movieFeatureKey, fromMovie.reducer),
        EffectsModule.forFeature([MovieEffects]),
    ],
    entryComponents: [MovieDetailsComponent],
    providers: [
        {
            provide: MovieService,
            useClass: MovieMockService,
        },
    ],
})
export class MovieModule {}
