import { ADD_CART, DELETE_CART } from './cart.actions';

const initialState = {
  products: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART: {
      return {
        ...state,
        products: state.products.concat(action.payload.product),
      };
    }
    case DELETE_CART: {
      const newProduct = state.products.filter(product => product.id !== action.payload.productId);
      return {
        ...state,
        products: newProduct,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
