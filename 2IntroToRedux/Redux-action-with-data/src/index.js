import store from './store';
import { addUser, deleteUser } from './users.reducer';
// import { addUser, deleteUser } from './users.actions';

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addUser());
store.dispatch(deleteUser(1));

// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch(addUser());
// store.dispatch(deleteUser());
