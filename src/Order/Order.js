import React from 'react';
import styled from "styled-components";
import {DialogContent, ConfirmButton, DialogFooter} from "../FoodDialog/FoodDialog";

const OrderStyled = styled.div`
  display: flex;
  flex-direction: column;
  @media(max-width: 768px) {
    width: 200px;
  }
  position: fixed;
  right: 0px;
  top: 50px;
  width: 330px;
  height: calc(100vh - 48px);
  background-color: white; 
  z-index: 10;
  box-shadow: -4px 0 34px -15px rgba(0,0,0,0.75);
`;

const OrderContent = styled(DialogContent)`
  padding: 20px;
  height: 100%;
`;

export function Order({orders}) {
    return (
        <OrderStyled>
            {orders.length === 0 ? <OrderContent>
                Your Order looks pretty abandoned...
            </OrderContent> : <OrderContent>Found {orders.length} orders</OrderContent>}
            <DialogFooter>
                <ConfirmButton>
                    Checkout
                </ConfirmButton>
            </DialogFooter>
        </OrderStyled>
    );
}


