import React from 'react'
import Product from './Product';

function Tablets() {
  return (
    <div className="home">
    <div className="home__container">
       
      
      <div className="home__row"> 
         <Product
           id="200"
           title="Apple iPad (10.1 Inch, 2GB RAM, 32GB ROM, Platinum Grey)"
           price={449}
           rating={5}
           image="https://www.bing.com/th?id=OPA.N6eKkobxDnikkQ474C474&o=5&pid=21.1&w=140&h=140&rs=1&qlt=100&dpr=1.3"
         />
         <Product
           id="201"
           title="Apple iPad Air"
           price={499}
           rating={4}
           image="https://www.bing.com/th?id=OPA.IU%2baDtBGta%2fF0A474C474&o=5&pid=21.1&w=140&h=140&rs=1&qlt=100&dpr=1.3"
         />
       </div>

       <div className="home__row">
         <Product
           id="202"
           title="Lenovo Tab M10 HD (2nd Gen) Wifi + 4G Android Tablet "
           price={1064}
           rating={4}
           image="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1672408245/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/237655_0_th68y8.png/mxw_2048,s_webp,f_auto"
         />
         <Product
           id="203"
           title="SAMSUNG Galaxy Tab A8 Wifi + 4G Android Tablet (10.5 Inch, 4GB RAM, 64GB ROM, Silver)"
           price={7119}
           rating={4}
           image="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1667854818/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/247597_0_tfo5jj.png/mxw_2048,s_webp,f_auto"
         />
         <Product
           id="204"
           title="Asus ROG Zephyrus G15"
           price={999}
           rating={5}
           image="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1667854107/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/229828_0_dw1dqe.png/mxw_2048,s_webp,f_auto"
         />
       </div>

       <div className="home__row">
       <Product
           id="205"
           title=" NVIDIA GeForce powered laptop "
           price={3755}
           rating={4}
           image="https://www.bing.com/th?id=OPA.mY%2fISI7xTngphA474C474&o=5&pid=21.1&w=140&h=140&rs=1&qlt=100&dpr=1.3"
         />
       </div>
     </div>
   </div>
 );
}

export default Tablets