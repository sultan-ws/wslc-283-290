// **admin panel controllers**

// parent category
const { 
    createParentCategory, 
    readParentCategories, 
    updateParentCategoryStatus,
    deleteParentCategory,
    deleteParentCategories
} = require("./admin-panel/parentCategoryControllers");


module.exports = {
    createParentCategory,
    readParentCategories,
    updateParentCategoryStatus,
    deleteParentCategory,
    deleteParentCategories
}