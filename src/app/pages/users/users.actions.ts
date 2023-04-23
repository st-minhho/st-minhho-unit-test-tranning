import ACTION_TYPES from '@app/core/constants/types';

export const getUsers = () => {
  return {
    type: ACTION_TYPES.GET_USERS
  };
};

export const getUsersSuccess = (data: any) => {
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

export const getDetailUserSuccess = (data: any) => {
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

export const removeUserSuccess = (data: any) => {
  return {
    type: ACTION_TYPES.REMOVE_USER_SUCCESS,
    payload: data
  };
};

export const removeUserFailed = (error: any) => {
  return {
    type: ACTION_TYPES.REMOVE_USER_FAILED,
    payload: error
  };
};
