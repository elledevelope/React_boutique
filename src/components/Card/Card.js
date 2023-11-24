import React from 'react';
import './Card.css';


const Card = (props) => {
  return (
    <div className="Card">



      <div id="pic">
      <img className="cardImg" src={"./assets/img/"+props.article.img} alt={props.article.name}></img>
      </div>

<div id="textCard">
<p className='cardTitle'>{props.article.name}</p>
      <p className='cardDesc'>{props.article.description}</p>
      <p className='cardPrice'>{props.article.prix}€ <span> - in stock : {props.article.qte}</span></p>
      <div className='cardBtn' onClick={()=>props.decrementQte(props.article.id)}> BUY NOW!</div>
</div>



    </div>
  )
};

export default Card;
