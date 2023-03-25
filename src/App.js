import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import {originals,actions} from './urls'
import './app.css'
import Banner from "./Components/Banner/Banner";
import './Components/Banner/Banner.css'
import RowPost from "./Components/RowPost/RowPost";


function App() {
  return (
   <div className="App">
    <NavBar/>
    <Banner/>
    <RowPost url={originals} title='Netflix Originals' />
    <RowPost url={actions} title='Actions' isSmall />
    <RowPost url={originals} title='Netflix Originals' /> 
   </div>
  );
}

export default App;
