export const ADD_USER = 'USERS/ADD_USER';
export const DELETE_USER = 'USERS/DELETE_USER';

export const addUser = userData => {
  return {
    type: ADD_USER,
    payload: { userData },
  };
};

export const deleteUser = userId => {
  return {
    type: DELETE_USER,
    payload: { userId },
  };
};
<<<<<<< HEAD

=======
>>>>>>> af2a2c5b720796c809a2860d6af394a33bb6bd57
