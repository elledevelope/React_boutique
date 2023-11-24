import React from "react";
import Gallery from './components/Gallery/Gallery.js';
import { articles } from './articles.js';
import './App.css';
import Menu from "./components/Menu/Menu.js";
import Panier from "./components/Panier/Panier.js";


const App = () => {
  //display elements from array 'articles' in Card:
  const [state, setState] = React.useState(
    {
      'articles': articles,
    }
  );

  //onClick <button> (Card), decrement number(qte) of articles in stock and do not go less than 0:
  const decrementQte = (id) => {
    //state.articles[id].qte--;
    //option1 :
    if (state.articles[id].qte > 0) {
      let articlesTmp = state.articles;
      articlesTmp[id].qte--;
      setState({
        'articles': articlesTmp,
      })
    }
  }

  const [statePanier, setStatePanier] = React.useState(
    {
      'displayPanier': false,
    }
  );

  // Function to toggle the 'displayPanier' state:
  const handelDisplayPanier = () => {
    setStatePanier({ 'displayPanier': !statePanier.displayPanier });
    console.dir(statePanier.displayPanier);
  }


  return (
    <>
      <header>
        <Menu handelDisplayPanier={handelDisplayPanier}> </Menu>
        {statePanier.displayPanier && <Panier ></Panier>}

      </header>
      <main>
        <Gallery articles={state.articles} decrementQte={decrementQte}></Gallery>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
