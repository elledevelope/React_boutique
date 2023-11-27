// import React from 'react';
import './Panier.css';

const Panier = (props) => (
  <>
    <div className='backgroundPanier'>
      <div className="Panier">
        <div className='close' onClick={props.handelDisplayPanier}>X</div>
        <p id="shoppingState">Your shopping bag</p>



        <p id="value">Order value:<span>00.00€</span></p>
        <p id="total">Total:<span>00.00€</span></p>



      </div>
    </div>
  </>

);

export default Panier;
