// **admin panel controllers**

// parent category
const { 
    createParentCategory, 
    readParentCategories, 
    updateParentCategoryStatus
} = require("./admin-panel/parentCategoryControllers");


module.exports = {
    createParentCategory,
    readParentCategories,
    updateParentCategoryStatus
}