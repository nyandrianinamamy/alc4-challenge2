import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { filter, tap } from 'rxjs/operators';
import { back, forward, go, routeChange } from '../actions/router.actions';

@Injectable()
export class RouterEffects {
    go$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(go),
                tap((action) =>
                    this.router.navigate(action.path, {
                        queryParams: action.queryParams,
                        ...action.extras,
                    }),
                ),
            ),
        { dispatch: false },
    );

    back$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(back),
                tap(() => this.location.back()),
            ),
        { dispatch: false },
    );

    forward$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(forward),
                tap(() => this.location.forward()),
            ),
        { dispatch: false },
    );

    private listenToRouter() {
        this.router.events
            .pipe(filter((event) => event instanceof ActivationEnd))
            .subscribe((event: ActivationEnd) =>
                this.store.dispatch(
                    routeChange({
                        params: { ...event.snapshot.params },
                        path: event.snapshot.routeConfig.path,
                    }),
                ),
            );
    }

    constructor(
        private actions$: Actions,
        private router: Router,
        private location: Location,
        private store: Store<any>,
    ) {
        this.listenToRouter();
    }
}
