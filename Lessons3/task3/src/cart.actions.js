export const ADD_CART = 'CART/ADD_CART';
export const DELETE_CART = 'CART/DELETE_CART';

export const addCart = product => {
  return {
    type: ADD_CART,
    payload: { product },
  };
}

export const deleteCart = productId => {
  return {
    type: DELETE_CART,
    payload: { productId },
  };
};