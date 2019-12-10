import React from 'react';
import {createGlobalStyle} from 'styled-components';
import {Navbar} from "./Navbar/Navbar";
import { Banner } from "./Banner/Banner";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
  }
  
  h1, h2, h3 {
    font-family: 'Righteous', cursive;
  }
`;

function App() {
    return (
        <>
            <GlobalStyle/>
            <Navbar/>
            <Banner/>
            <div>Little Italia</div>
        </>
    );
}

export default App;
