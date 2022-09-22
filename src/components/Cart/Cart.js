import React from 'react';
import './Cart.css';



const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total, pdp) => total + pdp.price , 0);
    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    }
    let shipping = 12.50;
    if(total < 85){
        shipping = 0;
    }
    else if(total < 15){
        shipping = 7.50;
    }else{
        shipping = 10;
    }
    return (
        <div className='cart-area'>
            <div className="summary">
                <h2>Order Summary</h2>
                <p>Items ordered: {cart.length} </p>
            </div>
            <div className="priceing">
                <p>Items: ${total}</p>
                <p><small>Shipping & Handling: ${shipping}</small> </p>
                <p><small>Total before tax: ${total + shipping}</small> </p>
                <p><small>Estimated Tax: ${Math.ceil((total + shipping)*.05)}</small> </p>
            </div>
            <div className="total-amount">
                <h3>Order Total : ${(total + shipping)+(Math.ceil((total + shipping)*.05))}</h3>
                <button className='review-btn'>Review your Order</button>
            </div>
            
        </div>
    );
};

export default Cart;