import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Footer from './Footer';
import Scroll from './Scroll.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

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
