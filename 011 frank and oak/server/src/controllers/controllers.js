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
    activeParentCategories,
    searchParentCategory
} = require("./admin-panel/parentCategoryControllers");

//product category
const {
    createProductCategory,
    readProductCategories,
    productCategoriesByParentCategory
} = require("./admin-panel/productCategoryControllers");

//admin
const {
    registerAdmin,
    adminLogin,
    genrateOtp,
    verifyOtp
} = require("./admin-panel/adminControllers");


const { createColor, activeColors } = require("./admin-panel/colorControllers");
const { createSize, activeSizes } = require("./admin-panel/sizeControllers");
const { createProduct } = require("./admin-panel/productControllers");


// **website controllers**

//user
const { genrateOtpWeb, registerUser, verifyJwt } = require("./website/userControllers");
const { activeParentCategoriesWeb } = require("./website/parentCategoryControllers");
const { activeProductCategoriesWeb } = require("./website/productCategoryControlles");
const { activeProductsByParentCategory } = require("./website/productControllers");
const { createCart, readCart, deleteCart, updateCartQuantity } = require("./website/cartControllers");
const { createCheckout, setPaymentStatus } = require("./website/paymentControllers");

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
    adminLogin,
    genrateOtp,
    verifyOtp,
    createColor,
    activeColors,
    createSize,
    activeSizes,
    productCategoriesByParentCategory,
    createProduct,
    genrateOtpWeb,
    registerUser,
    verifyJwt,
    activeParentCategoriesWeb,
    activeProductCategoriesWeb,
    activeProductsByParentCategory,
    createCart,
    readCart,
    deleteCart,
    updateCartQuantity,
    createCheckout,
    setPaymentStatus,
    searchParentCategory
}