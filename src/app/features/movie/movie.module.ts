import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { environment } from 'src/environments/environment';
import { HeaderComponent } from './components/header/header.component';
import { MovieRootComponent } from './containers/movie-root/movie-root.component';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieService } from './services/movie.service';
import { MovieMockService } from './services/movie.service.mock';
import { UserContentComponent } from './components/user-content/user-content.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [MovieRootComponent, HeaderComponent, UserContentComponent, FooterComponent],
  imports: [CommonModule, MovieRoutingModule, SharedModule],
  providers: [
    {
      provide: MovieService,
      useClass: environment.production ? MovieService : MovieMockService,
    },
  ],
})
export class MovieModule {}
