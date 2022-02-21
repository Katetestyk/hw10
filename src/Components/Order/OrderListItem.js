import React from 'react';
import styled from 'styled-components';
import trashImage from '../img/trash.png';

const  OrderItemStyled  = styled.li`
display: flex;
margin: 15px 0;
`;

const ItemName = styled.span`
     flex-grow: 1;    
`;

const ItemPrice = styled.span`
     margin-left: 20px;
     margin-right: 10px;
     min-width: 65px;
     text-align: right;     
`;

const TrashButton = styled.button`
  width: 24px;
  heigth:24px;
  border-color: transparent;
  backgroun-color: transparent;
  background-image: url(${trashImage});
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;

`;

export const OrderListItem =({ order }) => (
    <OrderItemStyled>
        <ItemName>{order.name}</ItemName>
        <span>2</span>
        <ItemPrice>{order.price.toLocaleString('ru-Ru',
                     { style: 'currency', currency: 'RUB'})}</ItemPrice>
        <TrashButton/>
    </OrderItemStyled>

);
