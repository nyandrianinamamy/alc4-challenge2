import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieService } from './services/movie.service';
import { MovieMockService } from './services/movie.service.mock';

@NgModule({
  declarations: [],
  imports: [CommonModule, MovieRoutingModule],
  providers: [
    {
      provide: MovieService,
      useClass: environment.production ? MovieService : MovieMockService,
    },
  ],
})
export class MovieModule {}
