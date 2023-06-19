import React,{Fragment,useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";


function App() {
  const [cartIsShaown, setCartIsShaown] = useState(false);

  const showCartHandler = () => {
      setCartIsShaown(true)
  }
  
  const hideCartHandler = () => {
      setCartIsShaown(false)
}
  return (
    <Fragment>
      {cartIsShaown&& <Cart onHideCart={hideCartHandler} />}
      <Header onShowCard={showCartHandler} />
      <main>
      <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
