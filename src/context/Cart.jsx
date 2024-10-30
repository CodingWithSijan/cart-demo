/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  // const addItem = (newItem) => {
  // setItems((prevItems) => {
  //   const existingItemIndex = prevItems.findIndex(
  //     (item) => item.name === newItem.name
  //   );
  //   if (existingItemIndex !== -1) {
  //     //if item exists, increase its quantity
  //     const updatedItems = [...prevItems];
  //     updatedItems[existingItemIndex] = {
  //       ...updatedItems[existingItemIndex],
  //       quantity: updatedItems[existingItemIndex].quantity + 1,
  //       price: newItem.price * (updatedItems[existingItemIndex].quantity + 1),
  //     };
  //     return updatedItems;
  //   } else {
  //     return [...prevItems, { ...newItem, quantity: 1 }];
  //   }
  // });
  // };

  const addItem = (newItem) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.name == newItem.name
      );
      //increase quantity
      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
          price: newItem.price * (updatedItems[existingItemIndex].quantity + 1),
        };
        return updatedItems;
      }else{
        return [...prevItems, {...newItem, quantity:1}]
      }
    });
  };
  return (
    <CartContext.Provider value={{ items, setItems, addItem }}>
      {props.children}
    </CartContext.Provider>
  );
};
