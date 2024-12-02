const Cart = require("../../models/cart");

const createCart = async (req, res) => {
    try {
        const { user, product, size, color } = req.body;
        const cartData = await Cart.findOne({
            user,
            product,
            size,
            color
        });

        if (cartData) {
            const response = await Cart.updateOne(
                { _id: cartData._id },
                {
                    $set: {
                        quantity: cartData.quantity + 1
                    }
                }
            );

            res.status(200).json({ message: 'success', data: response });
            return;
        }

        const dataToSave = new Cart(req.body);
        const data = await dataToSave.save();
        res.status(200).json({ message: 'success', data });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'internal server error' });
    }
};

const readCart = async (req, res) => {
    try {
        const data = await Cart.find(req.params)
            .populate('user')
            .populate('size')
            .populate('color')
            .populate('product');

        const filepath = `${req.protocol}://${req.get('host')}/frank-and-oak-files/`;

        res.status(200).json({ message: 'success', data, filepath });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'internal server error' });
    }
}

module.exports = {
    createCart,
    readCart
}



// git hub --> ssl