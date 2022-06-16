import stripeImport from 'stripe';
import getOrderAmount from '../helpers/getOrderAmount.js'
const stripe = stripeImport(process.env.STRIPE_SECRET_KEY)

const paymentIntent = async (req, res) => {
    const books = req.body;
    console.log("🚀 ~ file: paymentControllers.js ~ line 7 ~ paymentIntent ~ books", books.pm)
    console.log("🚀 ~ file: paymentControllers.js ~ line 7 ~ paymentIntent ~ req.body", req.body)

    // console.log("a ver qué trae los body", req.body)
    // console.log("toy en controladores de pago", )

    const paymentIntent = await stripe.paymentIntents.create({
      amount: await getOrderAmount(books),
      currency: "ars",
      payment_method: books.pm,
      automatic_payment_methods: {
        enabled: true,
      }
      // confirm: true,
      // automatic_payment_methods: {
      //   enabled: true,
      // },
    });
  
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  };

export {
    paymentIntent
}