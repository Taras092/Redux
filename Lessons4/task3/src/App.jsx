import React from 'react';
import { Provider } from 'react-redux';
import users from './users';
import UsersList from './users/UsersList';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <UsersList users={users}/>
    </Provider>
  );
};

export default App;
