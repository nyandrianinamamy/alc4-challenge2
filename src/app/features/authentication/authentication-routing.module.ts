import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInRootComponent } from './containers/sign-in-root/sign-in-root.component';

const routes: Routes = [
  {
    path: 'sign-in',
    component: SignInRootComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
