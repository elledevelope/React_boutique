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
  };

  //onClick <button> (Card), decrement number(qte) of articles in stock and do not go less than 0,
  // Function to decrement the quantity of an item identified by its ID:
  const decrementQte = (id) => {
    // Initialize an empty array to store updated purchase information:
    const achatTmp = [];
    // Flag to determine if the item with the specified ID is found in the current state,
    //une boolean pour arreter ma boucle si le id === value.idachat,
    //s'il existe dans nom array achat un article avec le meme id (déjà acheté)
    let stop = false;

    // Check if there are existing purchases in the array achat:
    if (state.achat.length > 0) {
      // Map over the existing purchases to update the quantity of the targeted item:
      achatTmp = state.achat.map((value) => {
        // Check if the current purchase has the same ID as the targeted item:
        if (value.idachat === id) {
          // Increment the quantity of the targeted item:
          value.qteachat++;
          // Set the stop flag to true to indicate that the item has been found and updated:
          stop = true
        }
        return value
      });
    };

    // If the targeted item was not found in the existing purchases, add it to the array:
      if (!stop) {
        // Create a new array by spreading the existing purchases and adding a new object for the targeted item:
        achatTmp = [...achatTmp, { 'idachat': id, 'qteachat': 1 }];
      };



      //state.articles[id].qte--;
      //option1 :
      if (state.articles[id].qte > 0) {
        let articlesTmp = state.articles; //Tmp - temporare
        articlesTmp[id].qte--;
        setState({
          'articles': articlesTmp,
          'achat': achatTmp,
        })
      };

    };



    return (
      <BoutiqueContext.Provider value={{ ...state, 'decrementQte': decrementQte }}>
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
