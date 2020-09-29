// import React from 'react';
import Reactfrom 'react'
import Map from "./components/map"
import StickyFooter from "./components/contact"
import SlideShow from './components/slideshow'
import Shop from './component/Shop'
import { BrowserRouter as Router, Route } from 'react-router-dom'
   

function App() {
  return (
    <div className="App">
      <Map/>

      <SlideShow/>
    
      <Shop/>
      <StickyFooter/>

    </div>

    )
  }
}

export default App