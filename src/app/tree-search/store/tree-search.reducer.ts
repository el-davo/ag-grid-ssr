import {createReducer, on} from '@ngrx/store';
import {treeSearch} from './tree-search.state';
import * as actions from '../store/tree-search.actions';

export const reducer = createReducer(
  treeSearch,
  on(actions.fetchRoots, (state) => ({...state, isFetchingRoots: true})),
  on(actions.fetchRootsSuccessful, (state, {tree}) => ({...state, isFetchingRoots: false, tree})),
  on(actions.fetchRootsFailed, (state) => ({...state, isFetchingRoots: false})),
  on(actions.fetchSubDirsSuccessful, (state, {tree}) => ({
    ...state,
    tree: [...state.tree, ...tree]
  }))
);
