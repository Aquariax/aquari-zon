import React from 'react';
import { useStateValue } from '../../state/StateProvider';
import { animated } from 'react-spring';

const CheckoutProduct = ({ id, image, price, rating, title, hideButton }) => {
	const [{}, dispatch] = useStateValue();
	const removeFromBasket = () => {
		dispatch({
			type: 'REMOVE_FROM_BASKET',
			id: id,
		});
	};
	return (
		<animated.div className='checkoutProduct' key={id}>
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
				{!hideButton && (
					<button onClick={removeFromBasket}>Remove from Basket</button>
				)}
			</div>
		</animated.div>
	);
};

export default CheckoutProduct;
