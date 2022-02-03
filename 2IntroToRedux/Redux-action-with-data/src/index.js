<<<<<<< HEAD
import store from './store';
=======
import store from "./store";
>>>>>>> af2a2c5b720796c809a2860d6af394a33bb6bd57
import { addUser, deleteUser } from './users.actions';

store.subscribe(() => {
  console.log(store.getState());
});

<<<<<<< HEAD
store.dispatch(addUser({ id: 1, name: 'Bob', age: 21 }));
store.dispatch(addUser({ id: 2, name: 'Sam', age: 45 }));
store.dispatch(addUser({ id: 3, name: 'Con', age: 22 }));
store.dispatch(addUser({ id: 4, name: 'Man', age: 55 }));
=======
store.dispatch(addUser({ id: 1, name: "Bob", age: 21 }));
store.dispatch(addUser({ id: 2, name: "Sam", age: 45 }));
store.dispatch(addUser({ id: 3, name: "Con", age: 22 }));
store.dispatch(addUser({ id: 5, name: "Boy", age: 55 }));
>>>>>>> af2a2c5b720796c809a2860d6af394a33bb6bd57
store.dispatch(deleteUser(2));
