import styled from 'styled-components';

export const ModalButton = styled.button`
  display: block;
  margin: 0 auto;
  width: 250px;
  height: 65px;
  background-color: #299B01;
  color: #fff;
  font-size: 21px;
  padding: 20px 73px;
  align-items: center;
  border-color: transparent;
  transition-property: color, background-color, border-color;
  transition-duration: .3s;
  &:hover {
    background-color: #fff;
    color: #299B01;
    border-color: #299B01;
  }
  &:disabled {
    background-color: #ccc;
    color: #bbb;
    border-color: #aaa;
  }
`;

