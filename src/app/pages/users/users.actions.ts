import ACTION_TYPES from '@app/core/constants/types';
import { IUser } from './users.reducers';

export const getUsers = () => {
  return {
    type: ACTION_TYPES.GET_USERS
  };
};

export const getUsersSuccess = (data: IUser[]) => {
  return {
    type: ACTION_TYPES.GET_USERS_SUCCESS,
    payload: data
  };
};
export const getUsersFailed = (error: any) => {
  return {
    type: ACTION_TYPES.GET_USERS_FAILED,
    payload: error
  };
};

export const getDetailUser = (id: number) => {
  return {
    type: ACTION_TYPES.GET_DETAIL_USER,
    payload: id
  };
};

export const getDetailUserSuccess = (data: IUser) => {
  return {
    type: ACTION_TYPES.GET_DETAIL_USER_SUCCESS,
    payload: data
  };
};

export const getDetailUserFailed = (error: any) => {
  return {
    type: ACTION_TYPES.GET_DETAIL_USER_FAILED,
    payload: error
  };
};

export const removeUser = (id: number) => {
  return {
    type: ACTION_TYPES.REMOVE_USER,
    payload: id
  };
};
