import './App.scss';
import Header from './components/Layout/header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import React, {useState} from 'react';
import CartProvider from "./store/CartProvider";

function App() {

    const [cartIsShown, setCartIsShown] = useState(false);
  return (
    <CartProvider>
        {cartIsShown && <Cart onClick={() => setCartIsShown(false)} />}
        <Header onClick={() => setCartIsShown(true)} />
        <Meals />


    </CartProvider>
  );
}

export default App;
