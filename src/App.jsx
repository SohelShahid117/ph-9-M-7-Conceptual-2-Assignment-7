import { useEffect, useState } from 'react'
import './App.css'
import SingleProduct from './Components/SingleProduct/SingleProduct'

function App() {
  // const [count, setCount] = useState(0)

  const [products,setProducts] = useState([])
  
  useEffect(()=>{
    fetch('./public/fakeData.json')
    .then((res)=>res.json())
    // .then((data)=>console.log(data))
    .then((data)=>setProducts(data))
  },[])

  const handleAddToCart = (p) =>{
    console.log(p)
  }


  return (
    <>
   
      {/* <h1>ph-9-M-7-Conceptual-2-Assignment-7:React</h1> */}

      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
        {/* <button onClick={handleButton}>
          count is {count}
        </button>
      </div> 
      
      <p>hello world</p> */}

      {/*  */}

      <div className='main-container'>

        <div className='cards-container'>
          {/* <h1>This is cards</h1> */}
          {/*  
          <div className='card'>
            <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"></img>
            <h1>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
            <p>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
          </div>
          <div className='card-footer'>
            <h1>520 $</h1>
            <button className='add-btn'>Add to Cart</button>
          </div>
        */}
        {/* <SingleProduct></SingleProduct> */}
       {
        products.map((pData)=><SingleProduct 
        product={pData}
        handleAddToCart = {handleAddToCart}
        ></SingleProduct>)
       }
          
        </div>
        {/* <SingleProduct></SingleProduct> */}

        <div className='carts-container'>
          <h2>This is carts</h2>
          <div className='cart-title'>
            <h4>Name</h4>
            <h4>Price</h4>
          </div>
        </div>
      </div>
    
    
    </>
  )
}

export default App
