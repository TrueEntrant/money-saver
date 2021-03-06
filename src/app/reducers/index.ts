import * as fromRouter from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer, ActionReducer } from '@ngrx/store';
import { environment } from './../../environments/environment';

export interface State {
  router: fromRouter.RouterReducerState;
}

export const reduers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger]
  : [];

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}
