// import React from 'react';

const SingleProduct = ({product,handleAddToCart}) => {
    // console.log(product)
    // console.log(handleAddToCart)
    const {category,description,id,image,price,title} = product
    // console.log(id)
    return (
        <div>
            {/* <h1>hello</h1> */}
          <div className='card'>
            <img src={image}></img>
            <h1>{title.slice(0,15)}</h1>
            <p>{description}</p>
          </div>
          <div className='card-footer'>
            <h1>{price} $</h1>
            <button onClick={(product)=>handleAddToCart(product)} className='add-btn'>Add to Cart</button>
          </div>
        </div>
    );
};

export default SingleProduct;