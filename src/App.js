import React from 'react';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
  }
  
  h1, h2, h3 {
    font-family: 'Righteous', cursive;
  }
`;

function App() {
    return (
        <>
            <h1>Little Italia</h1>
            <GlobalStyle/>
            <div>Pizza Shop</div>
        </>
    );
}

export default App;
