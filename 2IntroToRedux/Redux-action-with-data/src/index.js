import store, { addUser, deleteUser } from './store';

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addUser());
store.dispatch(deleteUser());

const users = [
  { id: 1, name: 'Bob', age: 21 },
  { id: 2, name: 'Sam', age: 45 },
  { id: 3, name: 'Con', age: 22 },
  { id: 4, name: 'Man', age: 55 },
  { id: 5, name: 'Boy', age: 55 },
  { id: 6, name: 'Her', age: 31 },
];

const usersReducer = users.map(user => store.dispatch(addUser(user)));

console.log(usersReducer);