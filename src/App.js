import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data';
import { useState } from 'react';
function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  return (
    <div className='App'>
      <Header></Header>
    <div className='container'>
      <div>
        <Main products={products}></Main>
        </div>
        <div>
        <Basket cartItems={cartItems}></Basket>
        </div>
    </div>
    </div>
  );
}

export default App;
