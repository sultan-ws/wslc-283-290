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
    readProductCategories
}