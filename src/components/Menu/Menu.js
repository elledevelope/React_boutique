import React from 'react';
import './Menu.css';
import Panier from '../Panier/Panier';
import ListMenu from '../ListMenu/ListMenu';

const Menu = (props) => {
  return (
    <div className="Menu">

      <nav id="menu">
        <ListMenu
          sendEntries={props.sendEntries}
          handleDisplayPanier={props.handleDisplayPanier}></ListMenu>
      </nav>

      {/* <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Men's</a></li>
        <li><a href="#">Women's</a></li>
        <li><a href="#">Contact</a></li>
      </ul> */} {/* FOAD 24.11.23 */}

      <div id="icon-panier" onClick={props.handelDisplayPanier}>
        <img src="./assets/img/cart-shopping-solid.svg" alt="icon-shopping-cart" />
      </div>

      {/* {props.displayPanier && <Panier handelDisplayPanier={props.handelDisplayPanier}></Panier>} */} {/* FOAD 24.11.23 */}

    </div>
  );
};

export default Menu;
