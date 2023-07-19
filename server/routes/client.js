import express from "express";
import { getCustomers, getProducts } from "../controllers/client.js";

const clientRouter = express.Router()

clientRouter.get("/products", getProducts)
clientRouter.get("/customers", getCustomers)

export default clientRouter