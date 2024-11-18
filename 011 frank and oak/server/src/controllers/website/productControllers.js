const Product = require('./../../models/product');

const activeProductsByParentCategory = async(req, res) =>{
    try{
        const data = await Product.find({parent_category: req.params.parent_category, status: true})
        .populate('parent_category')
        .populate('product_category')
        .populate('sizes')
        .populate('colors');

        const filepath = `${req.protocol}://${req.get('host')}/frank-and-oak-files/`

        res.status(200).json({message: 'success', data, filepath});
    }
    catch(error){
        console.log(error);
    }
};

module.exports = {
    activeProductsByParentCategory
}