import React from 'react';
import "./Orders.css";

function Orders() {
  return (
    <div className='orders'>
        <h1>Order Successful</h1>
        <img 
                className="logo" 
                src='https://www.bing.com/th?id=OIP.MTRz3f5ADkHBDFBD4BDTxwHaGo&w=196&h=169&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' alt=""/>
        </div>
  )
}

export default Orders








/*import { SocialDistance } from '@mui/icons-material';
import { user } from 'firebase-functions/v1/auth';
import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import Order from './Order';
import "./Orders.css";
import { useStateValue } from './StateProvider';

function Orders() {
  const [{ baskrt, user }, dispatch] = useStateValue();
  const [ orders, setOrders ] = useState([]);

  useEffect(() => {
    if(user) {
    db
      .collection('users')
      .doc(user?.uid)
      .collection('orders')
      .orderBy('created', 'desc')
      .onSnapshot(snapshot => (
        setOrders(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
  ))
} else {
  setOrders([])
}
}, [user]) 
  
  return (
    <div className='orders'>
        <h1>Orders</h1>

        <div className='orders__order'>
          {orders?.map(order => (
            <Order order={order} />
          ))}
        </div>
      </div>
  )
}

export default Orders*/