import React from 'react';
import Menubar from './components/Menubar'
import Contact from './components/Contact'
import Meny from './components/Meny'
import Drinks from './components/Drinks'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
import './css/app.css'
import Footer from './components/Footer';
import Desserts from './components/Desserts';
import landingImg from './images/dish.jpg'
function App() { 
  const baseUrl='/landingpage-demo'
  return (
    <div>
      <div  className='page'>
      <Router>
      <Menubar baseUrl={baseUrl}></Menubar>
      <div className='header'></div>
      <img className='landingimage' src={landingImg} alt='not found'></img>
      <Switch>
      <Route exact path={baseUrl}><Contact></Contact></Route>
      <Route exact path={baseUrl+'/menu'}><Meny></Meny></Route>
      <Route exact path={baseUrl+'/drinks'}><Drinks></Drinks></Route>
      <Route exact path={baseUrl+'/desserts'}><Desserts></Desserts></Route>

      </Switch>
      </Router>
      <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
