import React from 'react';
import './ListMenu.css';
import Panier from '../Panier/Panier';

const ListMenu = (props) => {
  return (
    <>
      <div className="ListMenu nav-links">
        <div className="close-icon">
          <img src="./assets/img/icons/x.svg" />
        </div>

        <ul >
          {
            props.sendEntries.map((value, index) => {

              return (
                <li
                  /* un event ne peut pas être directement conditionné */
                  onClick={
                    value.entry === "Panier" ? props.handleDisplayPanier : null
                  }
                  key={index}>{value.entry}</li>
              )
            })
          }
        </ul>
      </div>

      
    </>
  )
};

export default ListMenu;
