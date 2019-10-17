import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieRootComponent } from './containers/movie-root/movie-root.component';

const routes: Routes = [
    {
        path: 'movies',
        component: MovieRootComponent,
    },
    {
        path: 'favorites',
        component: MovieRootComponent,
    },
    {
        path: '',
        redirectTo: 'movies',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MovieRoutingModule {}
