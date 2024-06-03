/*import React, { useState } from 'react'
import axios from 'axios';

export const AddProducts = () => {
    const [img,setImg]=useState('');
    const [data,setData]=useState({
        Pname:"",
        Pprice:"",
        Pimg:""
    })
    
    const {Pname,Pprice,Pimg}=data;
    const addProduct = (e) => {
        
        e.preventDefault();
        axios.post('https://myfi-93b12-default-rtdb.firebaseio.com/refund.json',data).then(()=> alert("Submitted successfully"))
        
    }
     const changeHandle = (e) => {
    setData({...data,[e.target.name]:[e.target.value]})
}
const [error,setError]=useState('');
 

    return (
        <div className='container'>
            <br />
            <h2>ADD PRODUCTS</h2>
            <hr />
            <form autoComplete="off" className='form-group' onSubmit={addProduct}>
                <br></br>
                <label htmlFor="product-name">Product Name</label>
                <input type="text" name='Pname' className='form-control' required
                    onChange={changeHandle} value={Pname} />
                <br />
                <label htmlFor="product-price">Product Price</label>
                <input type="number" name='Pprice' className='form-control' required
                    onChange={changeHandle} value={Pprice} />
                <br />
                <button type="submit" name='submit' className='btn btn-success btn-md mybtn'>Refund the Product</button>
            </form>

                <form>

                <p>
                    <br></br>
                    <br></br>
                   The Product Added Will Be Verified By Our Technician Within
                   Few Days And Will Be Aconsidered for refund.
                   By signing-in you agree to the Cart app Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                </form>
        </div>
    )
}
export default AddProducts*/