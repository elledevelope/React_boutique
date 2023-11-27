import React from "react";
import Gallery from './components/Gallery/Gallery.js';
import { articles } from './articles.js';
import { menuentries } from "./menuentries.js";
import './App.css';
import Menu from "./components/Menu/Menu.js";
import Panier from "./components/Panier/Panier.js";
import BoutiqueContext from "./contexts/BoutiqueContext.js";




const App = () => {
  //display elements from array 'articles' in Card:
  const [state, setState] = React.useState(
    {
      'articles': articles,
      'achat': [],
    }
  );

  //-------------------PANIER:
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


  //onClick <button> (Card), decrement number(qte) of articles in stock and do not go less than 0:
  const decrementQte = (id) => {

    //state.articles[id].qte--;
    //option1 :
    if (state.articles[id].qte > 0) {
      let articlesTmp = state.articles;
      articlesTmp[id].qte--;
      setState({
        'articles': articlesTmp,
        //spread operator, //option2 :
        'achat': [...state.achat, id]
      })
    }



  };



  return (
    <BoutiqueContext.Provider value={state}>
      <header>
        <Menu
          handelDisplayPanier={handelDisplayPanier}
          sendEntries={menuentries}
        > </Menu>

        {/* Panier: */}
        {/* {statePanier.displayPanier && <Panier ></Panier>}  */} {/* FOAD 24.11.23 */}
        {statePanier.displayPanier ? <Panier
          handelDisplayPanier={handelDisplayPanier}
          achat={state.achat}
        ></Panier> : <></>}
      </header>


      <main>
        <div id="logo">
          {/* <img src="./assets/img/logo-boutique.png" /> */}
        </div>

        <Gallery articles={state.articles} decrementQte={decrementQte}></Gallery>
      </main>
      <footer></footer>
    </BoutiqueContext.Provider>
  );
}

export default App;
