import React from 'react'
import Product from './Product';

function Speaker() {
  return (
    <div className="home">
    <div className="home__container">
       
      
      <div className="home__row"> 
         <Product
           id="100"
           title="Acer Focal"
           price={4000}
           rating={4}
           image="https://consordini.com/wp-content/uploads/2021/09/focal-speakers-min.jpg"
         />
         <Product
           id="49538094"
           title="JBL"
           price={2805}
           rating={5}
           image="https://consordini.com/wp-content/uploads/2021/09/jbl-speaker-min.jpg"
         />
       </div>

       <div className="home__row">
         <Product
           id="4903850"
           title="Bose "
           price={3000}
           rating={4}
           image="https://consordini.com/wp-content/uploads/2021/09/bose-speakers-min.jpg"
         />
         <Product
           id="90829332"
           title="Sony Akio Morita"
           price={7109}
           rating={4}
           image="https://consordini.com/wp-content/uploads/2021/09/sony-speakers-1-min.jpg"
         />
         <Product
           id="3254354345"
           title="Logitech"
           price={6999}
           rating={3}
           image="https://consordini.com/wp-content/uploads/2021/09/yamaha-speaker-1-min.jpg"
         />
       </div>

       <div className="home__row">
       <Product
           id="23445930"
           title="MARSHALL"
           price={37565}
           rating={5}
           image="https://th.bing.com/th/id/OIP.Nn3SOn0IVS5rY7ao-DB9EAHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7"
         />
       </div>
     </div>
   </div>
 );
}

export default Speaker