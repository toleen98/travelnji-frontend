import React from 'react';

import Map from "./components/map"
import StickyFooter from "./components/contact"
import SlideShow from './components/slideshow'


function App() {
  return (
    <div className="App">
      <Map/>

      <SlideShow/>
      <StickyFooter/>

    </div>
  );
}

export default App;
