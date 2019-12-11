import React from "react";
import styled from 'styled-components';
import { pizzaRed } from "../Styles/colors";
import { Title } from "../Styles/title";

const NavbarStyled = styled.div`
  background-color: ${pizzaRed};
  font-size: 1.2rem;
  padding: 10px;
  position: fixed;
  width: 100%;
  z-index: 30;
  box-shadow: -13px 6px 20px 1px #0d0c09;
  border-bottom: 0.2px solid black;
`;

const Logo = styled(Title)`
  font-size: 1.5rem;
  color: paleturquoise;
  text-shadow: 2px 1px 4px rgba(33, 30, 38, 0.57);
`;

export function Navbar(){
    return <NavbarStyled>
        <Logo>
            Little Italy <span role="img" aria-label="pizza slice logo">🍕</span>
        </Logo>
    </NavbarStyled>
}


