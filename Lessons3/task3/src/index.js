import { addCart, deleteCart } from './cart.actions';
import { setUser, removeUser } from './user.actions';
import { setLanguage } from './language.actions'
import store from './store';

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(setUser({ name: 'Taras' }));


// store.dispatch(addCart({ id: 1, name: 'Iphone 11'}));
// store.dispatch(addCart({ id: 2, name: 'DELL 27' }));
// store.dispatch(addCart({ id: 3, name: 'Samsung Galaxcy' }));
// store.dispatch(deleteCart(1));
