import {
  UserAction,
  UserActionTypes
} from '../actions/user.actions';
import {
  User
} from '../models/user.model';

export interface UsersState {
  users: User[];
  loading: boolean;
  error: Error;
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: undefined
};

export function UserReducer(state: UsersState = initialState, action: UserAction) {
  switch (action.type) {
    case UserActionTypes.LOAD_USERS:
      return {
        ...state,
        loading: true
      };
    case UserActionTypes.LOAD_USERS_SUCCESS:
      return {
        ...state,
        list: action.payload,
          loading: false
      };
    case UserActionTypes.LOAD_USERS_FAILURE:
      return {
        ...state,
        error: action.payload,
          loading: false
      };
    default:
      return state;
  }
}
