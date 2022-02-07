export const ADD_USER = 'USER/ADD_USER';
export const REMOVE_USER = 'USER/REMOVE/USER';

export const setUser = userData => {
  return {
    type: ADD_USER,
    payload: { userData },
  };
};

export const removeUser = userId => {
  return {
    type: REMOVE_USER,
    payload: { userId },
  };
};