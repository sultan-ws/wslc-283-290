const express = require('express');
const { createCheckout } = require('../../controllers/controllers');

const paymentRouter = express.Router();

paymentRouter.post('/create-checkout', createCheckout);

module.exports = paymentRouter;