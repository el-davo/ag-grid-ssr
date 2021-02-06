import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ModuleState} from '../store/module.state';
import {Observable} from 'rxjs';
import {totalRowsSelector} from '../store/ssr.reducer';

@Component({
  selector: 'app-total-rows',
  templateUrl: './total-rows.component.html',
  styleUrls: ['./total-rows.component.scss']
})
export class TotalRowsComponent implements OnInit {

  totalRows$: Observable<number> | undefined;

  constructor(private store: Store<ModuleState>) {
  }

  ngOnInit(): void {
    this.totalRows$ = this.store.select(totalRowsSelector);
  }

}
