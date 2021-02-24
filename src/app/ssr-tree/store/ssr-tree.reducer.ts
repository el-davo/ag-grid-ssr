import {createFeatureSelector, createReducer} from '@ngrx/store';
import {SsrTreeState, ssrTreeState} from './ssr-tree.state';

export const reducer = createReducer(
  ssrTreeState
);

const featureSelector = createFeatureSelector<SsrTreeState>('ssrTree');

