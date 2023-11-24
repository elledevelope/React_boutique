import React from 'react';
import './Panier.css';

const Panier = () => (
  <>
    <div className="Panier">
        <p id="shoppingState">Your shopping bag is empty</p>
        <p id="value">Order value:<span>00.00€</span></p>
        <p id="total">Total:<span>00.00€</span></p>
    </div>
  </>

);

export default Panier;
