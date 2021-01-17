import React from 'react';
import Product from './Product';
function Home() {
	return (
		<div className='home'>
			<div className='home_container'>
				<img
					className='home_image'
					src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg'
					alt=''
				/>
				<div className='home_row'>
					<Product
						id='12321341'
						title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
						price={19.99}
						image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
						rating={5}
					/>
					<Product
						id='49538094'
						title='COOKLEE Stand Mixer, 800W 8.5-Qt. Kitchen Mixer with Dishwasher-Safe Dough Hooks, Flat Beaters, Whisk & Pouring Shield, SM-1522NM, Monarch Red'
						price={299.0}
						image='https://images-na.ssl-images-amazon.com/images/I/71g4S3K7%2BwL._AC_SL1500_.jpg'
						rating={4}
					/>
				</div>
				<div className='home_row'>
					<Product
						id='4903850'
						title='Samsung QN65Q70TA 65" Ultra High Defintion Smart 4K Quantum HDR QLED TV with a Samsung HW-Q60T Wireless 5.1 Channel Soundbar and Bluetooth Subwoofer (2020)'
						price={1395.98}
						image='https://images-na.ssl-images-amazon.com/images/I/81oqVGmjwBL._AC_SL1500_.jpg'
						rating={3}
					/>
					<Product
						id='23445930'
						title='Apple Watch Series 3 (GPS, 38mm) - Space Gray Aluminium Case with Black Sport Band'
						price={169.0}
						image='https://images-na.ssl-images-amazon.com/images/I/71fwbMm1NBL._AC_SL1500_.jpg'
						rating={4}
					/>
					<Product
						id='3254354345'
						title='Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal'
						price={24.99}
						image='https://images-na.ssl-images-amazon.com/images/I/61IxWv3ecpL._AC_SL1000_.jpg'
						rating={5}
					/>
				</div>
				<div className='home_row'>
					<Product
						id='3254354390'
						title='SYX MOTO 800W 36V Bruiser Kids Mini ATV Dirt Quad Electric Four-Wheeled Off-Road Vehicle, 5-7.5-12.5mph, with Reversing Switch, (L/W/H:45"-28"-28"), age for 6-12, GREEN CAMO'
						price={559.0}
						image='https://images-na.ssl-images-amazon.com/images/I/41j3HjCWAxL._AC_.jpg'
						rating={5}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
