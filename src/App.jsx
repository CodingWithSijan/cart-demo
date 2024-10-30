import Item from "./Item";
import Cart from "./Cart";
function App() {
  return (
    <>
      <Item name="MacBook Pro" price={10000} />
      <Item name="Pendrive" price={4000} />
      <Item name="Mobile" price={1000} />
      <Cart />
    </>
  );
}

export default App;
