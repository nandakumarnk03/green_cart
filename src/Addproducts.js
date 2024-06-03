import React, { useState } from 'react'
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
        axios.post('https://ekart-fb8d9-default-rtdb.firebaseio.com/add.json',data).then(()=> alert("Submitted successfully"))
        
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
                <label htmlFor="product-name">Product Name</label>
                <input type="text" name='Pname' className='form-control' required
                    onChange={changeHandle} value={Pname} />
                <br />
                <label htmlFor="product-price">Product Price</label>
                <input type="number" name='Pprice' className='form-control' required
                    onChange={changeHandle} value={Pprice} />
                <br />
                <label htmlFor="product-img">Product Image</label>
                <input type="file" name='Pimg' className='form-control' id="file" required value={Pimg}
                    onChange={changeHandle} />
                <br />
                <button type="submit" name='submit' className='btn btn-success btn-md mybtn'>ADD</button>
            </form>

                <form>

                <p>
                    <br></br>
                    <br></br>
                   The Product Added Will Be Verified By Our Technician Within
                   Few Days And Will Be Added In Our Site For Customers To Buy It.
                   By signing-in you agree to the Cart app Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                </form>
        </div>
    )
}
export default AddProducts