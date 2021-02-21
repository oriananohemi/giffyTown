import './App.css';
import ListGifs from './components/ListGifs'
import Home from './pages/Home'
import Header from './components/Header'

import { Route } from 'wouter'

const App = () => {
  
  return (
    <div className="App">
      <Header/>
      <section className="App-content">
        <Route component={ Home } path="" />
        <Route component={ ListGifs } path="/gif/:keyword" />
      </section>
    </div>
  );
}

export default App;
