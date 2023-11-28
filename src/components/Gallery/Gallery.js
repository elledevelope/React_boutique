import React from 'react';
import './Gallery.css';
import Card from '../Card/Card';


const Gallery = (props) => {
  return (
    <>
      <div className="Gallery">
        {
          props.articles.map((value, index) => (
            <Card key={index} article={value} decrementQte={props.decrementQte}></Card>
          ))
        }
      </div>
      <div className='btnShow'>Show more </div>
    </>
  )
};

export default Gallery;
