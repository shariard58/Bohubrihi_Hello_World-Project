import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import MainComponent from './Components/MainComponent';


// function App() {
//   return (
//     <div className="App">

//       <h1> Hello World </h1>
//       <Person />

//     </div>
//   );
// }

const App = () => {
  return (
    <BrowserRouter>

      <MainComponent />
    </BrowserRouter>
  );


}

export default App;
