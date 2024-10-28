
const createParentCategory = async (req, res) =>{
    res.status(200).json({message: 'success create category'});
};

module.exports = {
    createParentCategory
}