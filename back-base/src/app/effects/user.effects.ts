import {
  Injectable
} from '@angular/core';
import {
  Actions,
  Effect,
  ofType
} from '@ngrx/effects';
import {
  map,
  mergeMap,
  catchError
} from 'rxjs/operators';

import {
  LoadUserAction,
  UserActionTypes,
  LoadUserSuccessAction,
  LoadUserFailureAction
} from '../actions/user.actions';
import {
  of
} from 'rxjs';
import {
  UserService
} from '../services/user.service';
import {
  User
} from '../models/user.model';


@Injectable()
export class UserEffects {

  @Effect() loadUser$ = this.actions$
    .pipe(
      ofType < LoadUserAction > (UserActionTypes.LOAD_USERS),
      mergeMap(
        () => this.userService.getUsers()
        .pipe(
          map(data => {
            return new LoadUserSuccessAction(data);
          }),
          catchError(error => of (new LoadUserFailureAction(error)))
        )
      ),
    );

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}
