const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
	'sk_test_51IA0suKjwEXfIyb5mPPIL4ypiiS11yUkvUfkCX0j8TYeMAh3oKUQluOMfyc3OmHOqZtDxRGIGhFnvmUqwtdb3iu300HnivZ0od'
);
const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('hello world'));
app.post('/payments/create', async (request, response) => {
	const total = request.query.total;
	console.log('payment recieved for:', total);
	const paymentIntent = await stripe.paymentIntents.create({
		amount: total,
		currency: 'usd',
	});

	response.status(201).send({
		clientSecret: paymentIntent.client_secret,
	});
});

exports.api = functions.https.onRequest(app);
