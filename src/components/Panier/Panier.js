import Achat from '../Achat/Achat';
import './Panier.css';
import BoutiqueContext from "../../contexts/BoutiqueContext";
import React from 'react';

const Panier = (props) => {
  const boutiqueContext = React.useContext(BoutiqueContext);
  let total = 0;

  return (
    <>
      <div className='backgroundPanier'>
        <div className="Panier">
          <div className='close' onClick={props.handelDisplayPanier}>X</div>
          <p id="shoppingState">Your shopping bag</p>

          {
            props.achat.map(
              (value, index) => {

                total += boutiqueContext.articles[value.idachat].prix*value.qteachat;

                return (<Achat item={value} key={index}></Achat>)
              })
          }


          <p id="total">Total:<span> { total.toFixed(2)} € </span></p>



        </div>
      </div>
    </>

  )
};

export default Panier;


