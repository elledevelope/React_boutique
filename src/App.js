import './App.css';
import { articles } from './articles.js';
import Card from './components/Card/Card.js';
import Gallery from './components/Gallery/Gallery.js';


const App = () => {
  return (
    <>
      <header></header>
      <main>
        <Gallery>
          <Card></Card>
        </Gallery>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
