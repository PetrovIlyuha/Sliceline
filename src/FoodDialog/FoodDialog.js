import React from 'react';
import styled from "styled-components";
import {FoodLabel} from "../Menu/FoodGrid";
import {pizzaRed} from "../Styles/colors";
import { Title } from "../Styles/title";

const Dialog = styled.div`
  width: 500px;
  background-color: white;
  position: fixed;
  top: 75px;
  z-index: 6;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px);
  border-radius: 10px;
  border: 2px solid silver;
  display: flex;
  flex-direction: column;
`;

export const DialogContent = styled.div` 
  overflow: auto;
  min-height: 100px;
  
`;

export const DialogFooter = styled.div`
  box-shadow: 0px 2px 25px 0px grey;
  height: 60px;
  display: flex;
  justify-content: center;
`;

export const ConfirmButton = styled(Title)`
  margin: 10px;
  color: wheat;
  height: 20px;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  width: 200px;
  cursor: pointer;
  background-color: ${pizzaRed};
`;

const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  background-color: black;
  opacity: 0.7;
  z-index: 5;
`;

const DialogBanner = styled.div`
  min-height: 200px;
  margin-bottom: 20px;
  ${({img}) => `background-image: url(${img});`}
  background-position: center;
  background-size: cover;
  border-radius: 10px 10px 0 0;
`;

const DialogBannerName = styled(FoodLabel)`
  top: 100px;
  font-size: 2rem;
  padding: 5px 40px;
`;

/**
 * @return {null}
 */
export function FoodDialog({openFood, setOpenFood}) {
    function closeDialog() {
        setOpenFood();
    }

    return (
        openFood ? (
            <>
                <DialogShadow onClick={closeDialog}/>
                <Dialog>
                    <DialogBanner img={openFood.img}>
                        <DialogBannerName>{openFood.name}</DialogBannerName>
                    </DialogBanner>
                    <DialogContent/>
                    <DialogFooter>
                        <ConfirmButton>Add to Order</ConfirmButton>
                    </DialogFooter>
                </Dialog>
            </>
        ) : null
    );
}


