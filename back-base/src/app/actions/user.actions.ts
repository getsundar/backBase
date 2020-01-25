import {
  Action
} from '@ngrx/store';
import {
  User
} from '../models/user.model';

export enum UserActionTypes {
  LOAD_USERS = '[USER] Load Users',
    LOAD_USERS_SUCCESS = '[SHOPPING] Load User Success',
    LOAD_USERS_FAILURE = '[SHOPPING] Load User Failure'
}
export class LoadUserAction implements Action {
  readonly type = UserActionTypes.LOAD_USERS;
}
export class LoadUserSuccessAction implements Action {
  readonly type = UserActionTypes.LOAD_USERS_SUCCESS;
  constructor(public payload: Array < User > ) {}
}
export class LoadUserFailureAction implements Action {
  readonly type = UserActionTypes.LOAD_USERS_FAILURE;
  constructor(public payload: Error) {}
}

export type UserAction =
  LoadUserAction |
  LoadUserFailureAction |
  LoadUserSuccessAction;
