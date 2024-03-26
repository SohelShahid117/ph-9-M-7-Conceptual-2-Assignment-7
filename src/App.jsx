import { useEffect, useState } from 'react'
import './App.css'
import SingleProduct from './Components/SingleProduct/SingleProduct'

function App() {
  // const [count, setCount] = useState(0)

  const [products,setProducts] = useState([])

  const [cart,setCart] = useState([]);
  
  useEffect(()=>{
    fetch('./public/fakeData.json')
    .then((res)=>res.json())
    // .then((data)=>console.log(data))
    .then((data)=>setProducts(data))
  },[])

  const handleCart = (p) =>{
    console.log(p)

    let isExist = cart.find((item)=>item.id == p.id);
    console.log(isExist)

    if(isExist){
      alert('item already exist')
    }
    else{
      alert("item t cart a add koro")
      setCart([...cart,p])
    }
  
  }

  console.log(cart)

  const handleDeleteItem = (id) =>{
    // console.log(id)
    const newCart = cart.filter((item)=>item.id !=id)
    // console.log(newCart)
    setCart(newCart)
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
        key={pData.id}
        product={pData}
        handleCart = {handleCart}
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
          <div>
            {
              cart.map((singleItem,index)=>(
                <div className='cart-info'>
                  <p>{index+1}</p>
                  <h4>{singleItem.title.slice(0,15)}</h4>
                  <h4>{singleItem.price} $</h4>
                  <button onClick={()=>handleDeleteItem(singleItem.id)}>Delete</button>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    
    
    </>
  )
}

export default App


//43 min