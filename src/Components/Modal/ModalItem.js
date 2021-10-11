import React from 'react';
import styled from 'styled-components';
import { ModalButton } from './ModalButton';
import { CountItem } from './CountItem';
import { useCount } from '../Hooks/useCount';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { rub } from '../Functions/secondaryFunction';

const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  z-index: 20;
`;

const Modal = styled.div`
  background-color: #fff;
  width: 600px;
  height: 600px;
  text-align: center;
`;
const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 200px);
  padding: 30px;
`;

const Price = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  font-size: 30px;
  font-family: 'Pacifico', cursive;
  padding-left: 37px;
  font-weight: 700;
  padding-right: 53px;
`;
const Banner = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${({img}) => img});
  background-size: cover;
  background-position: center;
`;
const TotalPriceItem = styled.div`
    display: flex;
    justify-content: space-between;
  `;

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {
  const counter = useCount();

  const closeModal = e => {
    if(e.target.id === 'overlay') {
      setOpenItem(null);
    }
  }
  const order = {
    ...openItem,
    count: counter.count
  };
  

  const addToorder = () => {
    setOrders([...orders, order]);
    setOpenItem(null);
  }
  


  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img}/>
        <Content>
          <Price>
            <p>{openItem.name}</p>
            <p>{rub(openItem.price)}</p>
          </Price>
          <CountItem {...counter}/>
          <TotalPriceItem>
            <span>Цена: </span>
            <span>{rub(totalPriceItems(order))}</span>
          </TotalPriceItem>
          <ModalButton onClick={addToorder}>Добавить</ModalButton>
        </Content>
      </Modal>
    </Overlay>
  )
}