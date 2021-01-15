import React, { forwardRef } from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

const CheckoutProduct = forwardRef(
	({ id, image, price, rating, title }, ref) => {
		const [{}, dispatch] = useStateValue();

		const removeFromBasket = () => {
			dispatch({
				type: 'REMOVE_FROM_BASKET',
				id: id,
			});
		};

		return (
			<div className='checkoutProduct' ref={ref}>
				<img src={image} alt='' className='checkoutProduct_image' />
				<div className='checkoutProduct_info'>
					<p className='checkoutProduct_title'>{title}</p>
					<p className='checkoutProduct_price'>
						<small>$</small>
						<strong>{price}</strong>
					</p>
					<div className='checkoutProduct_rating'>
						{Array(rating)
							.fill()
							.map((_, i) => (
								<p>🌟</p>
							))}
					</div>
					<button onClick={removeFromBasket}>Remove from Basket</button>
				</div>
			</div>
		);
	}
);

export default CheckoutProduct;
