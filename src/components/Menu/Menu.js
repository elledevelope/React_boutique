import React from 'react';
import './Menu.css';
import Panier from '../Panier/Panier';

const Menu = (props) => {
  return (
    <div className="Menu">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Men's</a></li>
        <li><a href="#">Women's</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div id="icon-panier" onClick={props.handelDisplayPanier}>
        <img src="./assets/img/cart-shopping-solid.svg" alt="icon-shopping-cart" />
      </div>

      {props.displayPanier && <Panier handelDisplayPanier={props.handelDisplayPanier}></Panier>}

    </div>
  );
};

export default Menu;
