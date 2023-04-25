import ACTION_TYPES from '@app/core/constants/types';
import { createReducer } from '@app/core/helpers/reducer-factory';

export interface IUserCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IUserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IUserAddress;
  phone: string;
  website: string;
  company: IUserCompany;
}
export interface IInititalState {
  data: IUser[];
  isLoading: boolean;
  hasError: boolean;
  errorMessage: string;
  user: IUser;
}

const initialState: IInititalState = {
  data: [],
  isLoading: false,
  hasError: false,
  errorMessage: '',
  user: null
};

const getUsers = (state: IInititalState) => ({
  ...state,
  isLoading: true
});

const getUsersSuccess = (state: IInititalState, payload) => ({
  ...state,
  isLoading: false,
  data: payload
});

const getUsersFailed = (state: IInititalState, payload) => ({
  ...state,
  isLoading: false,
  hasError: true,
  error: payload.error
});

const getUserDetail = (state: IInititalState, payload) => ({
  ...state,
  isLoading: true
});

const getUserDetailSuccess = (state: IInititalState, payload) => ({
  ...state,
  isLoading: false,
  user: payload
});

const getUserDetailFailed = (state: IInititalState, payload) => ({
  ...state,
  isLoading: false,
  hasError: true,
  error: payload.error
});

const removeUser = (state: IInititalState, payload) => ({
  ...state,
  data: state.data.filter((item) => item.id !== payload),
  isLoading: false
});

const strategies = {
  [ACTION_TYPES.GET_USERS]: getUsers,
  [ACTION_TYPES.GET_USERS_SUCCESS]: getUsersSuccess,
  [ACTION_TYPES.GET_USERS_FAILED]: getUsersFailed,
  [ACTION_TYPES.GET_DETAIL_USER]: getUserDetail,
  [ACTION_TYPES.GET_DETAIL_USER_SUCCESS]: getUserDetailSuccess,
  [ACTION_TYPES.GET_DETAIL_USER_FAILED]: getUserDetailFailed,
  [ACTION_TYPES.REMOVE_USER]: removeUser,
  __default__: (state) => state
};

const usersReducer = createReducer(strategies, initialState);
export default usersReducer;
