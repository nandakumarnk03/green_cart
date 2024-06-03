import React from 'react'
import Product from './Product';

function Tv() {
  return (
    <div className="home">
     <div className="home__container">
        
       
       <div className="home__row"> 
          <Product
            id="100"
            title="TCL 138.71 cm (55 Inches) 4K UHD LED Smart Certified Android TV L55P2MUS"
            price={40000}
            rating={4}
            image="https://www.bestforyourhome.co.in/wp-content/uploads/2019/07/53-400x261.jpg"
          />
          <Product
            id="49538094"
            title="Thomson UD9 108cm (43 inch) Ultra HD (4K) LED Smart TV"
            price={38045}
            rating={3}
            image="https://www.bestforyourhome.co.in/wp-content/uploads/2019/07/54.jpeg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title=" Mi LED Smart TV 4 Pro 138.8 cm (55)"
            price={35000}
            rating={4}
            image="https://www.bestforyourhome.co.in/wp-content/uploads/2019/07/56-400x263.jpg"
          />
          <Product
            id="90829332"
            title="LG 108 cm (43 Inches) 4K UHD LED Smart TV 43UK6360PTE"
            price={41109}
            rating={4}
            image="https://www.bestforyourhome.co.in/wp-content/uploads/2019/07/59-400x308.jpg"
          />
          <Product
            id="3254354345"
            title="VU 108 cm (43 Inches) 4K Ultra HD Smart LED TV 43"
            price={60999}
            rating={2}
            image="https://www.bestforyourhome.co.in/wp-content/uploads/2019/07/58-400x268.jpg"
          />
        </div>

        <div className="home__row">
        <Product
            id="23445930"
            title="LG 108 cm (43 Inches) 4K UHD LED Smart TV UA43NU6100"
            price={37565}
            rating={5}
            image="https://www.bigpicturebigsound.com/artman2/uploads/4/20140904_161731-65-oled-lg-.jpg"
          />
        </div>
      </div>
    </div>
  );
}
export default Tv