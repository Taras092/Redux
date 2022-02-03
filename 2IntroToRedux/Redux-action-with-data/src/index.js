import store from "./store";
import { addUser, deleteUser } from './users.actions';

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addUser({ id: 1, name: "Bob", age: 21 }));
store.dispatch(addUser({ id: 2, name: "Sam", age: 45 }));
store.dispatch(addUser({ id: 3, name: "Con", age: 22 }));
store.dispatch(addUser({ id: 5, name: "Boy", age: 55 }));
store.dispatch(deleteUser(2));
