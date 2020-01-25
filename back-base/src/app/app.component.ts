import {
  Component,
  OnInit
} from '@angular/core';
import {
  Observable
} from 'rxjs';
import {
  User
} from './models/user.model';
import {
  AppState
} from './models/app-state.model';
import {
  Store
} from '@ngrx/store';
import {
  LoadUserAction
} from './actions/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'back-base';
  users$: Observable < Array < User > > ;
  constructor(private store: Store < AppState > ) {}

  ngOnInit(): void {
    this.store.dispatch(new LoadUserAction());
    this.users$ = this.store.select(store => store.users.users);
  }
}
