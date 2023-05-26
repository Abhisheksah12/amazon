import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'
import Subtotal from "./Subtotal"
function Checkout() {
  const [{basket, user}, dispatch]= useStateValue ();
  return (
    <div className="checkout">
          <div className="checkout__left">
            <img 
            className="checkout__ad"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Pay_Balance/apay_pc_banner_2.jpg" alt=""/>
            <div className="checkout__title">
              <h1>Hello,{user?.email}</h1>
            <h1>Your Shopping Basket</h1>
            </div>
              {basket.map(item =>(
                <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}

                />
              ))}
            
          </div>
        
        <div className="checkout__right">
            <Subtotal/>
            
        </div>
    </div>
  )
}

export default Checkout