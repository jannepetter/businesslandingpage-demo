import React, { useState } from 'react';
import Menubar from './components/Menubar'
import Contact from './components/Contact'
import Meny from './components/Meny'
import Drinks from './components/Drinks'
import './css/app.css'
import Footer from './components/Footer';
import Desserts from './components/Desserts';
import landingImg from './images/dish.jpg'
function App() { 
  const [page,setPage]=useState('contact')
  const changePage =(topage)=>{
    setPage(topage)
  }
  return (
    <div>
      <div  className='page'>
      <Menubar changePage={changePage} ></Menubar>
      <div className='header'></div>
      <img className='landingimage' src={landingImg} alt='not found'></img>
      <Contact show={page==='contact'}></Contact>
      <Meny show={page==='menu'}></Meny>
      <Drinks show={page==='drinks'}></Drinks>
      <Desserts show={page==='desserts'}></Desserts>
      <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
