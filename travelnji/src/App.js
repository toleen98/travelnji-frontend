
// import React from 'react';
import Reactfrom 'react'
import Map from "./components/map"
import StickyFooter from "./components/contact"
import SlideShow from './components/slideshow'

import Bags from './components/Bags'
import Bottels from './components/Bottels'

import contact from './components/contact'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import ButtonAppBar from './components/MenuAppBar'
import MenuAppBar from './components/MenuAppBar';
import GridContainer from './components/GridContainer';

function App() {
  return (
    <div className="App">
      <div style={{position:'relative', width:'100%', textAlign:'center'}}>
        <img src='https://i.pinimg.com/564x/cc/2c/e4/cc2ce44061b84155a1d00ac5b60acc9a.jpg' alt='patra' width={'100%'} height={500}/>
        <div style={{position:'absolute',top: 200, color:'white',left:'40%'}}>
          <h1 style={{fontSize:36 }}>Welcome To Jordan</h1>
          <h3>Enjoy Your Sustainable Journy</h3>
        </div>
        
      </div>
    <Router>
    
    <div >
    <MenuAppBar/>
    <Route path="/" exact component={Map} />
    <Route path="/Bags" exact component={Bags} />
    <Route path="/Bottels" exact component={Bottels} />
    <Route path="/" exact component={contact} />

    <Route path="/contact" exact component={contact} />
        <Route path="/SlideShow" exact component={SlideShow} />






    </div>
    </Router>

    )
  }



export default App