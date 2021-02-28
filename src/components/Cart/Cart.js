import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    console.log(cart);
    // const total = cart.reduce((total,prd) => total + prd.price,0)
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }
    let shipping = 0;
    if (total >35) {
        shipping =0;
    }else if(total > 15){
        shipping =4.99;
    }else if (total > 0){
        shipping = 12.99;
    }
    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);
    const formateNumber = num =>{
        const precusion = num.toFixed(2);
        return Number(precusion);
    }
    return (
        <div>
            <h1>Order summary</h1>
            <p>items Ordered: {cart.length}</p>
            <p>Product Price: {formateNumber(total)}</p>
            <p><small>Shipping cost {shipping}</small></p>
            <p><small>Tax + vat {tax}</small></p>
            <p>total proce{grandTotal}</p>
        </div>
    );
};

export default Cart;