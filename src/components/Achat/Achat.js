import React from 'react';
import './Achat.css';
import BoutiqueContext from "../../contexts/BoutiqueContext";

const Achat = (props) => {
  let id = props.item.idachat;
  const boutiqueContext = React.useContext(BoutiqueContext);
  let article = boutiqueContext.articles[id];
  const prixTotal = props.item.qteachat * article.prix;

  return (
    <div className="Achat">
      <div className='achatImg'>
        <img src={"./assets/img/" + article.img} alt={article.name} />
      </div>


      <div> {article.name} </div>

      <div id="sub_achat">
        <div className="achatQte">
          <span className="AchatBtn btnPlus" onClick={
            () => boutiqueContext.qteIncrement(id)
          }>
            -</span>
          <span className='achatQte'> {props.item.qteachat} </span>
          <span className="AchatBtn btnLess" onClick={
            () => boutiqueContext.decrementQte(id)}
          >+</span>
        </div>
        <span className='achatPrix'> {prixTotal.toFixed(2)} €  </span>
      </div>

    </div>
  )
};


export default Achat;
