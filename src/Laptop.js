import React from 'react'
import Product from './Product';

function Laptop() {
  return (
    <div className="home">
     <div className="home__container">
        
       
       <div className="home__row"> 
          <Product
            id="100"
            title="Acer S1001 (Intel 2-in-1 Detachable Laptop) (Atom Quad Core/ 2GB/ 32 GB eMMC/ Win8.1) (NT.G86SI.001)"
            price={40000}
            rating={4}
            image="https://ak1.ostkcdn.com/images/products/9486454/P16667744.jpg"
          />
          <Product
            id="49538094"
            title="Toshiba Click Mini 2in1 8.9 Inch 32GB Detachable Laptop Windows 8"
            price={28045}
            rating={3}
            image="https://4.bp.blogspot.com/-cWOqOh7pwMc/V5iWjYIxDAI/AAAAAAAAEJg/3pGx9gB1DKc4cU0U_vPDZcPY_kBQsKv2gCLcB/s320/Toshiba%2BClick%2BMini%2B2-in-1%2B8.9%2BInch%2B32GB%2BDetachable%2BLaptop%2BWindows%2B8%2B-%2BSilver.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Acer Nitro 5 AN515-54-5812 Gaming Laptop "
            price={35000}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71s1LRpaprL._AC_SL1500_.jpg"
          />
          <Product
            id="90829332"
            title="Acer Predator Helios 300"
            price={71109}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71k45hZkLmL._AC_SL1500_.jpg"
          />
          <Product
            id="3254354345"
            title="Asus ROG Zephyrus G15"
            price={60999}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81ef5sbZznL._AC_SL1500_.jpg"
          />
        </div>

        <div className="home__row">
        <Product
            id="23445930"
            title=" NVIDIA GeForce powered laptop "
            price={37565}
            rating={4}
            image="https://m.media-amazon.com/images/S/aplus-media/vc/43451354-fc7f-42a6-9a84-a70cabb1b734.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Laptop