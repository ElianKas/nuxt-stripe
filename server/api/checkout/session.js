import Stripe from 'stripe';

const stripe = new Stripe(
	'sk_test_51QcRowCOMiAbWXXe5AggNYkm4LENaBORFfeeDUewWlN4qfA7wT83YYKQIczmbwdmSedcMkIkWYk0r521XvvzcmaY00meJ5gCip'
);
const domain = 'http://localhost:3000';

export default defineEventHandler(async (event) => {
	const body = await readBody(event);
	const session = await stripe.checkout.sessions.create({
		line_items: [
			{
				price: 'price_1QcntuCOMiAbWXXeMUrWd4Wx',
				quantity: 1,
			},
		],
		mode: 'payment',
		success_url: `${domain}/success`,
		cancel_url: `${domain}/cancel`,
	});

	return {
		statusCode: 303,
		headers: {
			Location: session.url,
		},
	};
});
