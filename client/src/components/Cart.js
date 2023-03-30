import React from 'react'
import { useSelector } from 'react-redux';

function Cart() {
  const cartItems = useSelector(state => state.cart.items);
  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div>
      <span>cart: {cartItemCount} </span>
    </div>
  );
}

export default Cart;