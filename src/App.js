import React from "react";
import Gallery from './components/Gallery/Gallery.js';
import { articles } from './articles.js';
import { menuentries } from "./menuentries.js";
import './App.css';
import Menu from "./components/Menu/Menu.js";
import Panier from "./components/Panier/Panier.js";
import BoutiqueContext from "./contexts/BoutiqueContext.js";
import Footer from "./components/Footer/Footer.js";
import ListMenu from "./components/ListMenu/ListMenu.js";




const App = () => {

  const [stateToggleMenu, setToggleMenu] = React.useState(
    {
      'displayToggleMenu': false,
    }
  );
  const handelToggleMenu = () => {
    setToggleMenu({ 'displayToggleMenu': !stateToggleMenu.displayToggleMenu });
    console.dir(stateToggleMenu.displayToggleMenu);
  };



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
    // je déclare un tableau vide pour enregistrer mes achats
    let achatTmp = [];
    // je declare une boolean pour arreter ma boucle si le id === vaue.idachat
    // s'il existe dans mon tableau achat un article avec le meme id (dejà acheté)
    let stop = false;
    // une condition pour déterminer si mon tableau achat est vide
    if (state.achat.length > 0) {
      // je lance une boucle map qui pourra retourner une copie de state.achat
      // dans achatTmp
      achatTmp = state.achat.map((value) => {
        // si le resultat est positif
        if (value.idachat === id) {
          // j'incremente la qte de article acheté
          value.qteachat++;
          // j'empeche l'ajout d'un nouvel article à mon achatTmp
          stop = true
        }
        return value
      })
    }
    // si stop est resté à false (ma boucle n'a pas trouvé de resultat positif)
    if (!stop) {
      //j'ajoute un nouvel article à mon tableau achatTmp
      achatTmp = [...achatTmp, { 'idachat': id, 'qteachat': 1 }];
    }




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

  const qteIncrement = (id) => {
    const tmpPanier = state.achat;
    const tmpArticles = state.articles;
    tmpPanier.map((value, index) => {
      if (id === value.idachat) {
        tmpPanier[index].qteachat--;
        if (tmpPanier[index].qteachat === 0) {
          //  supprimer l'entrée correspondante dans tmpPanier avec splice et index
          tmpPanier.splice(index, 1);
        }
        // incrémenter l'article correspondant à l'id dans articlesApp
        tmpArticles[id].qte++;
        // setstate pour reajuster le panier et la qte (articlesApp)
        setState({
          ...state,
          // mise à jour de ma qte pour i(id de l'article)
          articles: tmpArticles,
          // mise à jour de mon panier avec l'ajout de i
          achat: tmpPanier
        })
      }
    })
  }

  const handleDisplayPanier = () => {
    setStatePanier({ 'displayPanier': !statePanier.displayPanier })
  }




  return (
    <BoutiqueContext.Provider value={{
      ...state,
      'decrementQte': (id) => decrementQte(id),
      'qteIncrement': (id) => qteIncrement(id)
    }}>
      <header>
        <link rel="icon" type="img/png" href="/assets/img/icons/hanger.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <Menu
          handleDisplayPanier={handleDisplayPanier}
          handelToggleMenu={handelToggleMenu}
          sendEntries={menuentries}
        > </Menu>

        {stateToggleMenu.displayToggleMenu ? <ListMenu
          handelToggleMenu={handelToggleMenu}
        ></ListMenu> : <></>}

        {/* {stateToggleMenu.displayToggleMenu && <ListMenu/>} */}


        {/* Panier: */}
        {/* {statePanier.displayPanier && <Panier ></Panier>}  */} {/* FOAD 24.11.23 */}
        {statePanier.displayPanier ? <Panier
          handelDisplayPanier={handelDisplayPanier}
          achat={state.achat}
        ></Panier> : <></>}
      </header>


      <main>
        <div id="logo">
          <img src="./assets/img/logo-boutique.png" />
        </div>

        <Gallery articles={state.articles} decrementQte={decrementQte}></Gallery>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </BoutiqueContext.Provider>
  );
}

export default App;
