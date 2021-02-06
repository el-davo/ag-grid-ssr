import {createAction, props} from '@ngrx/store';
import {LoadSuccessParams} from 'ag-grid-community/dist/lib/rowNodeCache/rowNodeBlock';

const FETCH_PAGE = 'ssr/FETCH_PAGE';
const SET_TOTAL_ROWS = 'ssr/SET_TOTAL_ROWS';

export const fetchPage = createAction(FETCH_PAGE, props<{ endRow: number, success: (params: LoadSuccessParams) => void }>());
export const setTotalRows = createAction(SET_TOTAL_ROWS, props<{ totalRows: number }>());
