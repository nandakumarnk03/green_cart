import React from 'react'
import Product from './Product';

function Headphones() {
  return (
    <div className="home">
     <div className="home__container">
        
       
       <div className="home__row"> 
          <Product
            id="100"
            title="Sennheiser HD 400S Black Wired Over Ear Headphones"
            price={4000}
            rating={4}
            image="https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,q_auto,w_700/c_pad,w_700/Y1836988-01"
          />
          <Product
            id="49538094"
            title="Bose QuietComfort 35 II Wireless Bluetooth Headphones, Noise-Cancelling, with Alexa voice control – Black"
            price={8045}
            rating={4}
            image="https://www.bestforyourhome.co.in/wp-content/uploads/2021/07/81jNVOUsJL._SL1500_-400x400.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title=" Sony WH-1000XM4 Industry Leading Wireless Noise Cancelling Headphone"
            price={5000}
            rating={5}
            image="https://www.bestforyourhome.co.in/wp-content/uploads/2021/07/71o8Q5XJS5L._SL1500_-250x300.jpg"
          />
          <Product
            id="90829332"
            title="boAt Rockerz 510 Over-Ear Headphones with 20 Hours Battery"
            price={1109}
            rating={4}
            image="https://www.bestforyourhome.co.in/wp-content/uploads/2021/07/7dd76b13-3b6f-4fc4-9c15-ef73f334d6c5_416x416-400x400.jpg"
          />
          <Product
            id="3254354345"
            title="Sennheiser HD 280 PRO ideal Over-Ear Headphone"
            price={6999}
            rating={5}
            image="https://www.bestforyourhome.co.in/wp-content/uploads/2021/07/41Pu422QBKL-218x300.jpg"
          />
        </div>

        <div className="home__row">
        <Product
            id="23445930"
            title="Skullcandy Hesh Evo Wireless Over-Ear Headphone with Up to 36 Hours of Battery"
            price={7565}
            rating={5}
            image="https://www.bestforyourhome.co.in/wp-content/uploads/2021/07/81C7IY23niL._SY355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Headphones