const express = require('express');
const { activeProductsByParentCategory } = require('../../controllers/controllers');

const productRouterWeb = express.Router();

productRouterWeb.get('/active-products/:parent_category', activeProductsByParentCategory);

module.exports = productRouterWeb;