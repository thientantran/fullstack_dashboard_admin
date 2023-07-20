import getCountryIso3 from "country-iso-2-to-3";
import Admin from '../models/Admin.js';
import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";
import Transaction from '../models/Transaction.js';
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

export const getTransactions = async(req, res) => {
  try {
    // cái sort nên ở định dạng {'field':'price', 'sort':'asc'}
    const {page = 0, pageSize = 20, sort = null, search = ""} = req.query;
    // cái này là lấy data theo phương thức get, dùng query trên đường link
    // lấy thông tin của field cần sort, phải ở định dạng {price: -1 || 1}
    console.log("SORT", sort)
    console.log("PAGE:", page)
    console.log("PAGESIZE:", pageSize)
    console.log("SEARCH:", search)
    const generateSort = () => {
      const sortParsed = JSON.parse(sort);
      const sortFormatted = {
        [sortParsed.field] : (sortParsed.sort === "asc" ? 1 : -1)
      }
      return sortFormatted
    }
    const sortFormatted = Boolean(sort) ? generateSort() : {};

    const data = await Transaction.find({
      $or:[
        {cost: {$regex: new RegExp(search, "i")}},
        {userId: {$regex: new RegExp(search, "i")}}
      ]
    }).sort(sortFormatted)
    .skip(page*pageSize).limit(pageSize)
    // logic chỗ này k hợp lý => phải lấy cái page = 0
    const total = await Transaction.countDocuments({
      $or:[
        {cost: {$regex: new RegExp(search, "i")}},
        {userId: {$regex: new RegExp(search, "i")}}
      ]
    });
    res.status(200).json({data,total})
  } catch (error) {
    console.log(error)
    res.status(404).json({message: error.message})
  }
}

export const getGeography = async (req, res) => {
  try {
    const users = await Admin.find();
    const mappedLocations = users.reduce((acc, {country}) => {
      // acc là 1 dictionary rỗng, rồi add country vào là key, nếu có key thì + 1, ko có thì tạo mới rồi + vào
      const countryISO3 = getCountryIso3(country) // chuyển định dạng country 2->3: ví dụ CH -> CHN
      if(!acc[countryISO3]){
        acc[countryISO3] = 0
      }
      acc[countryISO3] ++;
      return acc
    },{})
    const formattedLocations = Object.entries(mappedLocations).map(([country, count])=>{
      return {id: country, value:count}
    })
    res.status(200).json(formattedLocations)
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}