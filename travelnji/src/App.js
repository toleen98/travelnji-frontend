// import React from 'react';


// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

// export default App;
import React, { Component } from 'react'



import Shop from './component/Shop'

import { BrowserRouter as Router, Route } from 'react-router-dom'

// import CheckoutForm from "./checkOutForm";

// import AboutOur from "./about";


class App extends Component {
  render() {
    return (
      
    <div className="App">
      <Shop/>
    </div>

    )
  }
}

export default App