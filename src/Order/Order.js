import React from 'react';
import styled from "styled-components";
import {DialogContent, ConfirmButton, DialogFooter} from "../FoodDialog/FoodDialog";
import {formatPrice} from "../Data/FoodData";
import {getPrice} from '../FoodDialog/FoodDialog';

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

const OrderContainer = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid grey;
  ${({editable}) => editable ? `
    &:hover {
    cursor: pointer;
    background-color: #e7e7e7;
    }
  `
    : `
    pointer-events: none
    `}
`;

const OrderItem = styled.div`
  padding: 10px 0;
  display: grid;
  grid-template-columns: 20px 150px 20px 60px;
  justify-content: space-between;
`;

const DetailItem = styled.div`
  color: gray;
  font-size: 10px;
`;

export function Order({orders, setOrders, setOpenFood}) {
    const subTotal = orders.reduce((total, order) => {
        return total + getPrice(order);
    }, 0);
    const tax = subTotal * 0.20;
    const total = subTotal + tax;

    const deleteItem = (index) => {
        const newOrders = [...orders];
        newOrders.splice(index, 1);
        setOrders(newOrders);
    };
    return (
        <OrderStyled>
            {orders.length === 0 ? (<OrderContent>
                    Your Order looks pretty abandoned...
                </OrderContent>) :
                (<OrderContent>
                    <OrderContainer>
                        Your order:
                    </OrderContainer>
                    {orders.map((order, index) => (
                        <OrderContainer editable>
                            <OrderItem
                                onClick={() => {
                                    setOpenFood({...order, index})
                                }}
                            >
                                <div>{order.quantity}</div>
                                <div>{order.name}</div>
                                <div
                                    style={{cursor: "pointer"}}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        deleteItem(index)
                                    }}
                                >🗑️</div>
                                <div>{formatPrice(getPrice(order))}</div>
                            </OrderItem>
                            <DetailItem>
                                {order.toppings
                                    .filter(t => t.checked)
                                    .map(topping => topping.name)
                                    .join(", ")
                                }
                            </DetailItem>
                            <DetailItem>
                                {order.choices && <DetailItem>{order.choice}</DetailItem>}
                            </DetailItem>
                        </OrderContainer>
                    ))}
                    <OrderContainer>
                        <OrderItem>
                            <div/>
                            <div>Sub-Total</div>
                            <div>{formatPrice(subTotal)}</div>
                        </OrderItem>
                        <OrderItem>
                            <div/>
                            <div>VAT</div>
                            <div>{formatPrice(tax)}</div>
                        </OrderItem>
                        <OrderItem>
                            <div/>
                            <div>Total</div>
                            <div>{formatPrice(total)}</div>
                        </OrderItem>
                    </OrderContainer>
                </OrderContent>)
            }
            <DialogFooter>
                <ConfirmButton>
                    Checkout
                </ConfirmButton>
            </DialogFooter>
        </OrderStyled>
    );
}


