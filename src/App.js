import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch }
from "react-router-dom";
import Login from './Login';
import Checkout from './Checkout';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders';
import Categories from './Categories';
import Laptop from './Laptop';
import Mobile from './Mobile';
import Tablets from './Tablets';
import Speaker from './Speaker';
import Headphones from './Headphones';
import Tv from './Tv';
import AddProducts from './Addproducts';
import Register from './Register';


const promise = loadStripe(
  "pk_test_51K1pU1SH3qRXHH6ufeCBtYHk2yHv7rlowVkIayoRPlsBnW39RZZGJE9rXIXycppU6WHlbBv2BFnajGL63RCv8etN00YC96uiXL"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the app component loads..
    
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        // the user just logged in / the user was logged in    
      dispatch({
        type: 'SET_USER',
        user: authUser
      })

      } else {
        // the user is logged out      
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    
    <Router>
    <div className="App">
    <Switch>
    <Route path="/Categories">
          <Header /> 
            <Categories />
          </Route> 
          <Route path="/Laptop">
          <Header /> 
            <Laptop />
          </Route> 
          <Route path="/Tablets">
          <Header /> 
            <Tablets />
            </Route>
          <Route path="/Mobile">
          <Header /> 
            <Mobile />
          </Route>
          <Route path="/Speaker">
          <Header /> 
            <Speaker />
          </Route>
          <Route path="/Headphones">
          <Header /> 
            <Headphones />
          </Route>
          <Route path="/Tv">
          <Header /> 
            <Tv />
          </Route>
          



    <Route path="/Orders">
            <Header /> 
            <Orders />
          </Route> 
          <Route path="/Addproducts">
            <AddProducts />
          </Route> 
          <Route path="/Register">
            <Register />
          </Route> 
    <Route path="/login">
            <Login />
          </Route> 
    <Route path="/Checkout">   
            <Header />        
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
      <Route path="/">     
            <Header />     
           <Home />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
