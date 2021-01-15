import React, { useState } from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';

function Payment() {
	const [{ basket, user }, dispatch] = useStateValue();
	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true);
	const [processing, setProcessing] = useState(false);
	const [succeeded, setSucceeded] = useState('');

	const stripe = useStripe();
	const elements = useElements();

	const handleSubmit = (e) => {};
	const handleChange = (e) => {
		setDisabled(e.empty);
		setError(e.error ? e.error.message : '');
	};
	return (
		<div className='payment'>
			<div className='payment_container'>
				<h1>
					Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
				</h1>
				<div className='payment_section'>
					<div className='payment_title'>
						<h3>Delivery Address</h3>
					</div>
					<div className='payment_address'>
						<p>{user?.email}</p>
						<p>123 React Lane</p>
						<p>Los Angeles, CA</p>
					</div>
				</div>
				<div className='payment_section'>
					<div className='payment_title'>
						<h3>Review items and delivery</h3>
					</div>
					<div className='payment_items'>
						{basket.map((item) => (
							<CheckoutProduct
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
				</div>
				<div className='payment_section'>
					<div className='payment_title'>
						<h3>Payment Method</h3>
					</div>
					<div className='payment_details'>
						<form action='' onSubmit={handleSubmit}>
							<CardElement onChange={handleChange} />
							<div className='price_container'>
								<CurrencyFormat
									renderText={(value) => <h3>Order Total: {value}</h3>}
									decimalScale={2}
									value={getBasketTotal(basket)}
									displayType={'text'}
									thousandSeperator={true}
									prefix={'$'}
								/>
								<button disabled={processing || disabled || succeeded}>
									<span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Payment;
