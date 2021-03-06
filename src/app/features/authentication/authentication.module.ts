import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SignInRootComponent } from './containers/sign-in-root/sign-in-root.component';
import { SharedModule } from '../../shared/shared.module';
import { AuthenticationService } from './services/authentication.service';
import { environment } from '../../../environments/environment';
import { AuthenticationMockService } from './services/authentication-mock.service';

@NgModule({
    declarations: [
        SignInRootComponent
    ],
    imports: [
        CommonModule,
        AuthenticationRoutingModule,
        SharedModule
    ],
    providers: [
        {
            provide: AuthenticationService,
            useClass: environment.production ? AuthenticationService : AuthenticationMockService
        }
    ]
})
export class AuthenticationModule {
}
