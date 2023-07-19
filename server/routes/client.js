import express from "express";
import { getCustomers, getProducts, getTransactions } from "../controllers/client.js";

const clientRouter = express.Router()

clientRouter.get("/products", getProducts)
clientRouter.get("/customers", getCustomers)
clientRouter.get("/transactions", getTransactions)

export default clientRouter