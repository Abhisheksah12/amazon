import React, { useState , useEffect } from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import {CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';



function Payment() {
    const [{basket , user} , dispatch] = useStateValue();
    const navigate = useNavigate (); 

    const stripe=useStripe();
    const elements = useElements();

    const[succeeded,setSucceeded] = useState (false);
    const[processing,setProcessing]= useState ("")
    const [error, setError]= useState(null);
    const [disabled,setDisabled] = useState(true);
    const [clientSecret,setClientSecret] = useState ();
  

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card :elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            setSucceeded(true);
            setError (null)
            setProcessing(false)

            navigate("/Orders")

        })
    }

    const handleChange = e=> {
        setDisabled (e.empty);
        setError (e.error ? e.error.message : "");
    }

  return (
    <div className="payment">
        <div className="payment__container">
        <h1>
            Checkout(<Link to="/Checkout">{basket?.length} items </Link>)
        </h1>

        
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Delivery Address</h3>
                </div>
                <div className="payment__address">
                    <p>{user?.email}</p>
                    <p>123 React Lane</p>
                    <p>Los Angeles ,CA </p>
                </div>
            </div>
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Review items and delivery</h3>
                </div>
                <div className="payment__items">
                    {basket.map(item => (
                        <CheckoutProduct
                       id={item.id}
                       title={item.title}
                       price={item.price}
                       image={item.image}
                       rating={item.rating} 
                        />
                    ))}
                </div>
            </div>
            <div classsName="payment__section">
                <div className="payment__title">
                    <h3>Payment Method</h3>
                </div>
                <div className='payment__details'>
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className='payment__priceContainer'>
                                <CurrencyFormat
                                renderText={(value)=>(
                                    <>
                                    <h3>Order Total : {value}</h3>
                                    </>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>processing</p> : "Buy now"}</span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Payment