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


module.exports = {
    createParentCategory,
    readParentCategories,
    updateParentCategoryStatus,
    deleteParentCategory,
    deleteParentCategories,
    readParentCategory,
    updateParentCatergory,
    activeParentCategories
}