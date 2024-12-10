import Product from '../models/Product.model.js';
import mongoose from 'mongoose';



export const getProduct = async(req, res)=>{
    try{
        const products = await Product.find({});
        res.status(200).json({success:true, data: products});
        
    }
    catch(error){
        console.error("Error in fetching products:", error.message);
        res.status(500).json({success: false, message:"Server Error"})
    }
}






export const postProduct = async(req ,res)=>{
    const product = req.body; // user will sends data
    if(!product.name||!product.price||!product.image){
        return res.status(400).json({success: false, message:"Please provide full details."});
    }

    const newProduct = new Product(product);
    try{
        await newProduct.save();
        res.status(201).json({success:true, message:"Product added successfully"})
    }catch(error){
        console.error("Error in Created products:", error.message);
        res.status(500).json({success: false, message:"Server Error"})
    }
}






export const updateProduct =async(req, res) => {
    const {id} = req.params
    const product = req.body

    if(!mongoose.Type.ObjectId.isValid(id)){
        res.status(500).json({message: 'Invalid'})
    }
    try{
        await Product.findByIdAndUpdate(id, product, {new:true})
        res.status(200).json({success:true, message: "Product updated successfully"})
    }catch(err){
        console.error("Error updating products", err.message)
        res.status(500).json({success: false, message: "Server Error"})
    }
}






export const deleteProduct = async(req, res) => {
    const{id} = req.params;
    console.log("id:",id);
    try{
            await Product.findByIdAndDelete(id)
            res.status(200).json({success: true, message: "Product deleted successfully"})
    }catch(err){
        console.error("Error deleting products", err.message)
        res.status(500).json({success: false, message: "Server Error"})
    }
}


