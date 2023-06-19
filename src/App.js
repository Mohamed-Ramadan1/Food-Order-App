import React,{useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartPorvider from "./store/CartProvider";


function App() {
  const [cartIsShaown, setCartIsShaown] = useState(false);

  const showCartHandler = () => {
      setCartIsShaown(true)
  }
  
  const hideCartHandler = () => {
      setCartIsShaown(false)
}
  return (
    <CartPorvider>
      {cartIsShaown&& <Cart onHideCart={hideCartHandler} />}
      <Header onShowCard={showCartHandler} />
      <main>
      <Meals/>
      </main>
    </CartPorvider>
  );
}

export default App;
