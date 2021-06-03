import {createReducer} from '@ngrx/store';
import {localStorageState} from './local-storage.state';

export const reducer = createReducer(
  localStorageState
)
