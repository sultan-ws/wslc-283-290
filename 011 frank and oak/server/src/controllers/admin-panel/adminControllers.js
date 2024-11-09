const Admin = require("../../models/admin");

const registerAdmin = async ()=>{
    try{
        const adminData = await Admin.find();

        if(adminData.length !== 0) return console.log(adminData[0]);

        const newAdmin = new Admin({
            email: process.env.ADMIN_EMAIL,
            password: process.env.ADMIN_PASSWORD
        });

        const response = await newAdmin.save();

        console.log('admin registered',response);
    }
    catch(error){
        console.log(error);
    }
};

const adminLogin = async (req, res) => {
    try{

        const adminData = await Admin.findOne({email: req.body.email});

        if(!adminData) return res.status(401).json({message:'invalid email'});

        if(adminData.password !== req.body.password) return res.status(401).json({message:'invalid password'});
        res.status(200).json({message:'success', data: adminData});
    }
    catch(error){
        console.log(error);
    }
}

module.exports = {
    registerAdmin,
    adminLogin
}