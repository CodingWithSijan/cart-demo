import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "./context/Cart";

const Item = ({ name: item_name, price: item_price }) => {
  const cart = useContext(CartContext);
  console.log(cart.items);

  return (
    <div style={{ border: "1px solid black", padding: "20px", width: "200px" }}>
      <h2>{item_name}</h2>
      <p>Price: ${item_price}</p>
      <button
        onClick={() => {
          cart.addItem({ name: item_name, price: item_price });
        }}
      >
        Add To Cart
      </button>
    </div>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
export default Item;
