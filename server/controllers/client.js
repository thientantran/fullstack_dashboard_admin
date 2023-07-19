import Admin from '../models/Admin.js'
import Product from "../models/Product.js"
import ProductStat from "../models/ProductStat.js"
export const getProducts = async(req, res) => {
  try{
    const products = await Product.find()
    const productsWithStats = await Promise.all(
      products.map( async (product) => {
        const stat = await ProductStat.find({
          productId: product._id
        });
        return {
          ...product._doc, stat
        }
      })
    )
    res.status(200).json(productsWithStats)
  }catch(err){
    res.status(400).json({message: err.message})
  }
}

export const getCustomers = async(req, res) => {
  try {
    const customers = await Admin.find({role:"user"}).select("-password");
    res.status(200).json(customers)
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}