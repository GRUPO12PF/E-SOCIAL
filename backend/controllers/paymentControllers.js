import stripeImport from 'stripe'
import getOrderAmount from '../helpers/getOrderAmount.js'
const stripe = stripeImport(process.env.STRIPE_SECRET_KEY)

const paymentIntent = async (req, res) => {
  const product = req.body

  const paymentIntent = await stripe.paymentIntents.create({
    amount: await getOrderAmount(product),
    currency: "ars",
    payment_method: product[0].pm,
    confirm: true
    // automatic_payment_methods: {
    //   enabled: true,
    // },
  })

  res.send({
    clientSecret: paymentIntent.client_secret,
  })
}

export {
  paymentIntent
}
