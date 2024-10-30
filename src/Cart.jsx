import { useContext } from "react";
import { CartContext } from "./context/Cart";

const Cart = () => {
  const cart = useContext(CartContext);
  let total = cart.items.reduce(
    (accum, currentValue) => accum + currentValue.price,
    0
  );
  return (
    <div>
      <h1>Cart</h1>
      {cart &&
        cart.items.map((items, index) => (
          <li key={index}>
            {items.name} - Quantity : {items.quantity} -Total Price:{" "}
            {items.price}
          </li>
        ))}
      <h2>Total: {total}</h2>
    </div>
  );
};

export default Cart;
