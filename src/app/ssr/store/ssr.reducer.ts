import {createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import {SsrState, ssrState} from './ssr.state';
import * as actions from './ssr.actions';

export const reducer = createReducer(
  ssrState,
  on(actions.setTotalRows, (state, {totalRows}) => ({...state, totalRows}))
);

const featureSelector = createFeatureSelector<SsrState>('ssr');

export const totalRowsSelector = createSelector(
  featureSelector,
  (state) => state.totalRows
);

