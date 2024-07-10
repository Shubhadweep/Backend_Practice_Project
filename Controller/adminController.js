
const adminModel = require('../Model/adminModel');

const getAddItem = (req,res)=>{
    res.render("user/addProduct",{
        title:'Add Product'
    })
}

const postAddItem = async(req,res)=>{
    try{
        console.log("The add details Collected from the Form: ",req.body,req.files);
        let imageArr = req.files.map(value=>{
            return value.path;
        })
        let sizeArr = req.body.size.map(value=>{
            return value;
        })
        let colorArr = req.body.color.map(value=>{
            return value;
        })

        let formData = new adminModel({
            product_Name:req.body.productName,
            product_Description: req.body.productDescription,
            product_Price:req.body.productPrice,
            product_Category:req.body.productCategory,
            product_Size: sizeArr,
            product_Color:colorArr,
            product_Image:imageArr
        })
        let saveData = await formData.save();
        if(saveData){
            console.log("The Product data Added in the databse Successfully");
            res.end();
        }

    }catch(error){
      console.log("Failed to save data into the database",error);
    }
}





module.exports= {getAddItem,postAddItem};