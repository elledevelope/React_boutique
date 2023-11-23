import React from "react";
import Gallery from './components/Gallery/Gallery.js';
// import Card from './components/Card/Card.js';
import { articles } from './articles.js';
import './App.css';
import Card from "./components/Card/Card.js";


const App = () => {
  const [state, setState] = React.useState(
    {
      'articles': articles,
    }
  );

  const decrementQte = (id) =>{
    //state.articles[id].qte--;
    //option1 :
    let articlesTmp = state.articles;
    articlesTmp[id].qte--;
    setState({
      'articles':articlesTmp,
    })
  }

  return (
    <>
      <header></header>
      <main>
        <Gallery articles={state.articles}>
        </Gallery>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
