// **admin panel controllers**

// parent category

const {
    createParentCategory,
    readParentCategories,
    updateParentCategoryStatus,
    deleteParentCategory,
    deleteParentCategories,
    readParentCategory,
    updateParentCatergory,
    activeParentCategories
} = require("./admin-panel/parentCategoryControllers");

//product category
const {
    createProductCategory,
    readProductCategories
} = require("./admin-panel/productCategoryControllers");

//admin
const {
    registerAdmin,
    adminLogin
} = require("./admin-panel/adminControllers");

module.exports = {
    createParentCategory,
    readParentCategories,
    updateParentCategoryStatus,
    deleteParentCategory,
    deleteParentCategories,
    readParentCategory,
    updateParentCatergory,
    activeParentCategories,
    createProductCategory,
    readProductCategories,
    registerAdmin,
    adminLogin
}