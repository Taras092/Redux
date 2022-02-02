import store, { addUser, deleteUser, store1 } from './store';

// store1.subscribe(() => {
//   console.log(store1.getState());
// });

// store1.dispatch(addUser({ id: 1, name: 'Bob', age: 21 }));
// store1.dispatch(deleteUser(1));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addUser());
// store.dispatch(deleteUser());
store.dispatch(deleteUser());
