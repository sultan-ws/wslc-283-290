const express = require('express');
const parentCategoryRouter = require('./admin-panel/parentCategoryRoutes');
const productCategoryRouter = require('./admin-panel/productCategoryRoutes');
const adminRouter = require('./admin-panel/admin');

const adminPanelRouter = express.Router();
const websiteRouter = express.Router();
const appRouter = express.Router();

adminPanelRouter.use('/parent-category', parentCategoryRouter);
adminPanelRouter.use('/product-category', productCategoryRouter);
adminPanelRouter.use('/admin', adminRouter);

module.exports = {
    adminPanelRouter,
    websiteRouter,
    appRouter
}