import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';
import { useTitle } from './Components/Hooks/useTitle';
import { OrderConfirm } from './Components/Order/OrderConfirm';
import { useOrderConfirm } from './Components/Hooks/useOrderConfirm';
import { Context } from './Components/Functions/context';

const firebaseConfig = {
  apiKey: "AIzaSyD1imp50dmZjd6F_QGlNEQuJAFdNxoOcOE",
  authDomain: "mrdonalds-a9e85.firebaseapp.com",
  databaseURL: "https://mrdonalds-a9e85-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mrdonalds-a9e85",
  storageBucket: "mrdonalds-a9e85.appspot.com",
  messagingSenderId: "821400618345",
  appId: "1:821400618345:web:19a36f3c3ad6e7cd09a9f8"
};
firebase.initializeApp(firebaseConfig);


function App() {

  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem();
  const orders = useOrders();
  const orderConfirm = useOrderConfirm();
  useTitle(openItem.openItem);

  return (
    <Context.Provider value={{
      auth,
      openItem,
      orders,
      orderConfirm,
      firebaseDatabase: firebase.database,
    }}>
      <GlobalStyle />
      <NavBar/>
      <Order />
      <Menu />
      { openItem.openItem && <ModalItem />}
      {orderConfirm.openOrderConfirm && <OrderConfirm />}
    </Context.Provider>
    
  );
}

export default App;
