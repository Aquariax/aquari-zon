import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Footer from './Footer';
import Payment from './Payment';
import Scroll from './Scroll.js';
import Orders from './Orders.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

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
					</Route>
					<Route path='/orders'>
						<Orders />
					</Route>
					<Route path='/payment'>
						<Elements stripe={promise}>
							<Payment />
						</Elements>
					</Route>
					<Route path='/'>
						<Home />
					</Route>
				</Switch>
				<Scroll />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
