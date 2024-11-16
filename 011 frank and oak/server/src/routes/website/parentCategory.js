const express = require('express');
const { activeParentCategoriesWeb } = require('../../controllers/controllers');

const parentCategoryRouterWeb = express.Router();

parentCategoryRouterWeb.get('/active-categories', activeParentCategoriesWeb);

module.exports = parentCategoryRouterWeb;