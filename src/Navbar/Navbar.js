import React from "react";
import styled from 'styled-components';
import { pizzaRed } from "../Styles/colors";
import { Title } from "../Styles/title";

const NavbarStyled = styled.div`
  background-color: ${pizzaRed};
  font-size: 1.2rem;
  padding: 10px;
`;

const Logo = styled(Title)`
  font-size: 1.5rem;
  color: paleturquoise;
  text-shadow: 2px 1px 4px rgba(33, 30, 38, 0.57);
`;

export function Navbar(){
    return <NavbarStyled>
        <Logo>
            Little Italy 🍕
        </Logo>
        This is Navigation
    </NavbarStyled>
}


