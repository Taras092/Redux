import { ADD_CART, DELETE_CART } from './cart.actions';

const initialState = {
  cart: {
    products: [],
  },
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART: {
      return {
        ...state,
        cart: {
          products: state.cart.products.concat(action.payload.product),
        },
      };
    }
    case DELETE_CART: {
      const newProduct = state.cart.products.filter(product => product.id !== action.payload.productId);
      return {
        ...state,
        cart: {
          products: newProduct,
        },
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
