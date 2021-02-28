import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    function add(a,b){
        return a+b;
    }

	console.log(props);
	const { img, name, price, seller, stock } = props.product;
	return (
		<div className="product">
			<div>
				<img src={img} alt="" />
			</div>
			<div>
				<h4 className="product-name">{name}</h4>
				<br />
				<p>by: {seller}</p>
				<p>price:${price}</p>
				<p>only {stock} left in stock</p>
                <button 
                     className='main-button'
                     onClick={() => props.handleAddProduct(props.product)}
                ><FontAwesomeIcon icon={faShoppingCart} /> &nbsp;add to cart</button>
			</div>
		</div>
	);
};

export default Product;
