import React from 'react';
import Subtotal from '../Subtotal';
import { useStateValue } from '../../state/StateProvider';
import CheckoutProduct from './CheckoutProduct';

const Checkout = () => {
	const [{ basket, user }] = useStateValue();
	return (
		<div className='checkout'>
			<div className='checkout_left'>
				<img
					src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
					alt=''
					className='checkout_ad'
				/>
				<h3>Hello, {user?.email}</h3>
				<h2 className='checkout_title'>Your Basket</h2>
				{basket.map((item, index) => (
					<CheckoutProduct
						key={index}
						id={item.id}
						title={item.title}
						image={item.image}
						price={item.price}
						rating={item.rating}
					/>
				))}
			</div>
			<div className='checkout_right'>
				<h2>Total Goes Here</h2>
				<Subtotal />
			</div>
		</div>
	);
};
export default Checkout;
