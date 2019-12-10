import React from 'react';
import {createGlobalStyle} from 'styled-components';
import {Navbar} from "./Navbar/Navbar";

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
            <Navbar/>
            <GlobalStyle/>
            <div>Little Italia</div>
        </>
    );
}

export default App;
