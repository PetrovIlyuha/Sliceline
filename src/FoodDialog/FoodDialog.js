import React from 'react';
import styled from "styled-components";
import {FoodLabel} from "../Menu/FoodGrid";
import {pizzaRed} from "../Styles/colors";
import {Title} from "../Styles/title";
import {formatPrice} from "../Data/FoodData";
import {QuantityInput} from './QuantityInput';
import {useQuantity} from "../Hooks/useQuantity";
import {useToppings} from "../Hooks/useToppings";
import {Toppings} from "./Toppings";
import { useChoice } from '../Hooks/useChoice';
import { Choices } from "./Choices";

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
  min-height: 200px;
  padding: 10px 40px 80px 10px;
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
  ${({disabled}) => disabled &&
    `
        opacity: .5;
        background-color: grey;
        pointer-events: none;
    `
}
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
  ${({img}) => (img ? `background-image: url(${img});` : `min-height: 75px;`)}
  background-position: center;
  background-size: cover;
  border-radius: 10px 10px 0 0;
`;

const DialogBannerName = styled(FoodLabel)`  
  font-size: 2rem;
  padding: 5px 40px;
  top: ${({img}) => (img ? `100px` : `20px`)}
`;
const pricePerTopping = 0.5;

export function getPrice(order){
    return order.quantity * (order.price + order.toppings.filter(t => t.checked).length * pricePerTopping);
}

function hasToppings(food){
    return food.section === "Pizza";
};

function FoodDialogContainer({openFood, setOpenFood, orders, setOrders}) {
    const quantity = useQuantity(openFood && openFood.quantity);
    const toppings = useToppings(openFood.toppings);
    const choiceRadio = useChoice(openFood.choice);
    const isEditing = openFood.index > -1;

    function closeDialog() {
        setOpenFood();
    }

    if (!openFood) return null;

    const order = {
        ...openFood,
        quantity: quantity.value,
        toppings: toppings.toppings,
        choice: choiceRadio.value
    };

    function editOrder(){
        const newOrders = [...orders];
        newOrders[order.index] = order;
        setOrders(newOrders);
        closeDialog();
    }
    function addToOrder() {
        setOrders([...orders, order]);
        closeDialog();
    }


    return (
        <>
            <DialogShadow onClick={closeDialog}/>
            <Dialog>
                <DialogBanner img={openFood.img}>
                    <DialogBannerName>{openFood.name}</DialogBannerName>
                </DialogBanner>
                <DialogContent>
                    <QuantityInput quantity={quantity}/>
                    {hasToppings(openFood) &&
                        <>
                        <h3> Would you like toppings? </h3>
                    <Toppings {...toppings}/>
                    </>}
                    {openFood.choices && <Choices openFood={openFood} choiceRadio={choiceRadio}/>}
                </DialogContent>
                <DialogFooter>
                    <ConfirmButton
                        onClick={isEditing ? editOrder : addToOrder}
                        disabled={openFood.choices && !choiceRadio.value}
                    >
                        {isEditing ? `Update Order`: `Add to Order`} {formatPrice(getPrice(order))}
                    </ConfirmButton>
                </DialogFooter>
            </Dialog>
        </>
    );
}


/**
 * @return {null}
 */
export function FoodDialog(props) {
    if (!props.openFood) return null;
    return <FoodDialogContainer {...props}/>;
}

