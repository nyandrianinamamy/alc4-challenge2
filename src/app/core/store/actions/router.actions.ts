import { createAction, props } from '@ngrx/store';

export const go = createAction(
    '[Router] Go',
    props<{ path: any; queryParams?: object; extras?: object }>(),
);
export const back = createAction('[Router] Back');
export const forward = createAction('[Router] Forward');
export const routeChange = createAction(
    '[Router] Route Change',
    props<{ params: any; path: string }>(),
);
