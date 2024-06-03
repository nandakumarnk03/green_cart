import React from 'react'
import "./Categories.css";
import { Link } from "react-router-dom";

function Categories() {
    return ( 
        <div className="home">

         <div className="home__container">
         <h1>Categories</h1>
         
           <div className="home__row">    

             <div className="product">
              <p className="name">Laptop</p>
              <Link to="/Laptop"> 
                <img src="https://th.bing.com/th/id/OIP.5EZRHGR0LgL2IWcQ511TkQHaF5?w=247&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt=""/>                              
              </Link>
              </div>   

              <div className="product">
              <p className="name">Tablets</p>
              <Link to="/Tablets"> 
                <img src="https://th.bing.com/th/id/OIP.r1KFOWwAOCDiA8YtTTB4EAHaD7?w=343&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt=""/>                              
              </Link>
              </div>  

            </div>
    
            <div className="home__row">            
            <div className="product">
            <p className="name">Mobile</p>
              <Link to="/Mobile"> 
                <img src="https://th.bing.com/th/id/OIP.EqIg9cTRhf8r2FUdsuoMYgHaHa?w=162&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt=""/>                              
              </Link>
              </div>

              <div className="product">
              <p className="name">speaker</p>
              <Link to="/speaker"> 
                <img src="https://th.bing.com/th/id/OIP.Nn3SOn0IVS5rY7ao-DB9EAHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt=""/>                              
              </Link>
              </div> 

              <div className="product">
              <p className="name">Headphones</p>
              <Link to="/Headphones"> 
                <img src="https://th.bing.com/th/id/OIP.bretXSsneGWJ0jpa5kcgGAHaF3?w=231&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt=""/>                              
              </Link>
              </div> 

            </div>
    
            <div className="home__row">
             
            <div className="product">
            <p className="name">Tv's</p>
              <Link to="/Tv"> 
                <img src="https://th.bing.com/th/id/OIP.VjfNCM-FnMIqXWYyIgls8gHaFj?w=260&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt=""/>                              
              </Link>
              </div> 

            </div>
          </div>
        </div>
      );
    }
    
export default Categories