import React from 'react';
import './Gallery.css';
import Card from '../Card/Card';


const Gallery = (props) => (
  <div className="Gallery">
    {
      props.articles.map((value, index) => (
        <Card key={index} article={value} decrementQte={props.decrementQte}></Card>
      ))
    }
  </div>
);

export default Gallery;
