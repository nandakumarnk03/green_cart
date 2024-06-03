import React from 'react'
import Product from './Product';

function Mobile() {
  return (
    <div className="home">
    <div className="home__container">
       
      
      <div className="home__row"> 
         <Product
           id="100"
           title="OnePlus 10R 5G (12GB RAM, 256GB, Forest Green)"
           price={38000}
           rating={5}
           image="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662434970/Croma%20Assets/Communication/Mobiles/Images/252420_gpezur.png/mxw_2048,s_webp,f_auto"
         />
         <Product
           id="49538094"
           title="OPPO F21 Pro (8GB RAM, 128GB, Cosmic Black)"
           price={20045}
           rating={4}
           image="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662436729/Croma%20Assets/Communication/Mobiles/Images/251267_x4lcmx.png/mxw_2048,s_webp,f_auto"
         />
       </div>

       <div className="home__row">
         <Product
           id="4903850"
           title="vivo V23 5G (8GB RAM, 128GB, Stardust Black)"
           price={25000}
           rating={3}
           image="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662442624/Croma%20Assets/Communication/Mobiles/Images/246693_wkbdi8.png/mxw_2048,s_webp,f_auto"
         />
         <Product
           id="90829332"
           title="SAMSUNG Galaxy S20 FE 5G (8GB RAM, 128GB, Cloud Navy)"
           price={41109}
           rating={4}
           image="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1666992568/Croma%20Assets/Communication/Mobiles/Images/233767_nndowr.png/mxw_2048,s_webp,f_auto"
         />
         <Product
           id="3254354345"
           title="Asus ROG Zephyrus G15"
           price={6999}
           rating={3}
           image="https://th.bing.com/th?id=OPA.5ON2zVNt8GIwxg474C474&w=272&h=380&o=5&dpr=1.3&pid=21.1"
         />
       </div>

       <div className="home__row">
       <Product
           id="23445930"
           title=" Galaxy Z flip "
           price={87565}
           rating={5}
           image="https://th.bing.com/th?id=OPA.6BfOkzOQ9B5CZA474C474&w=272&h=380&o=5&pid=21.1"
         />
       </div>
     </div>
   </div>
 );
}

export default Mobile