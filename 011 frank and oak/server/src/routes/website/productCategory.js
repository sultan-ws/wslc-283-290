const express = require('express');
const { activeProductCategoriesWeb } = require('../../controllers/controllers');

const productCategoryRouterWeb = express.Router();

productCategoryRouterWeb.get('/active-categories', activeProductCategoriesWeb);

module.exports = productCategoryRouterWeb