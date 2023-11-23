import React from 'react';
import './Card.css';
// import Button from '../Button/Button';

/* const Card = ({ article }) => {
  return (
    <div className="Card">
      <img src={article.img} alt={article.name} />
      <p id="name">{article.name}</p>
      <p id="description">{article.description}</p>
      <p id="prix">{article.prix} € - in stock: {article.quantite} </p>

      <Button onClick = {() =>props.decrementQte(props.article.id)} />
    </div>
  );
}; */

const Card = (props) => {
  return (
    <div className="Card">
      <img className="cardImg" src={"./assets/img/"+props.article.img} alt={props.article.name}></img>
      <p className='cardTitle'>{props.article.name}</p>
      <p className='cardDesc'>{props.article.description}</p>
      <p className='cardPrice'>{props.article.prix}€ - in stock : {props.article.qte}</p>
      <p className='cardBtn'>
        <div onClick={()=>props.decrementQte(props.article.id)}>
          BUY NOW!</div></p>

    </div>
  )
};




export default Card;
