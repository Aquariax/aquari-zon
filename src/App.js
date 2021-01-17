import React, { useEffect } from 'react';
import Header from './components/layout/Header';
import Home from './components/layout/Home';
import Checkout from './components/layout/checkout/Checkout';
import Login from './components/layout/Login';
import Footer from './components/layout/Footer';
import Payment from './components/layout/Payment';
import Scroll from './components/layout/Scroll.js';
import Orders from './components/layout/order/Orders.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useStateValue } from './components/state/StateProvider';
import { auth } from './firebase';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import './components/layout/styles/compiled/main.css';

const promise = loadStripe(
	'pk_test_51IA0suKjwEXfIyb5CYpaY9kUMydsGhevYhbzErGmSdVjFjiAwdgLvshQD7FswMq3A0dMQnw6vW8DpFRknCYsHVcv00ENMLRIK2'
);

function App() {
	const [{}, dispatch] = useStateValue();
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			console.log('user is ', authUser);
			if (authUser) {
				dispatch({
					type: 'SET_USER',
					user: authUser,
				});
			} else {
				dispatch({
					type: 'SET_USER',
					user: null,
				});
			}
		});
	}, []);
	return (
		<Router>
			<div className='app'>
				<Header />
				<Switch>
					<Route path='/login'>
						<Login />
					</Route>
					<Route path='/checkout'>
						<Checkout />

						<Footer />
					</Route>
					<Route path='/orders'>
						<Orders />

						<Footer />
					</Route>
					<Route path='/payment'>
						<Elements stripe={promise}>
							<Payment />
						</Elements>

						<Footer />
					</Route>
					<Route path='/'>
						<Home />
						<Scroll />
						<Footer />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
