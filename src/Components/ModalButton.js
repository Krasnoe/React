import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: rgba(41, 155, 1, 1);
  color: white;
  font-size: 21px;
  padding: 20px 73px;
  align-items: center;
`;

export const ModalButton = () => (
  <Button>Добавить</Button>
)