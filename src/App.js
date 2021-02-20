import { useEffect, useState } from 'react';
import './App.css';
import getGifs from './services/getGifs';
import ListGifs from './components/ListGifs'

const App = () => {
  const [ gifs, setGifs ] =  useState([])
  // [] es un parametro para evitar que entre en un ciclo infinito
  useEffect(() => {
    getGifs({keyword: 'panda'})
      .then(gifs => setGifs(gifs))
  }, [])
  
  return (
    <div className="App">
      <section className="App-content">
        < ListGifs gifs={gifs}/>
      </section>
    </div>
  );
}

export default App;
