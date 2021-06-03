import {ActionReducer, INIT} from '@ngrx/store';
import {ModuleState} from './module.state';

export const hydrationMetaReducer = (
  reducer: ActionReducer<ModuleState>
): ActionReducer<ModuleState> => {
  return (state, action) => {
    if (action.type === INIT) {
      const storageValue = localStorage.getItem('local-storage');
      if (storageValue) {
        try {
          return JSON.parse(storageValue);
        } catch {
          localStorage.removeItem('state');
        }
      }
    }
    const nextState = reducer(state, action);
    localStorage.setItem('state', JSON.stringify(nextState));
    return nextState;
  };
};
