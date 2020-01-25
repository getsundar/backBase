import {
  UsersState
} from '../reducers/user.reducers';

export interface AppState {
  readonly users: UsersState;
}

export const selectUsers = (state: AppState) => state.users;
