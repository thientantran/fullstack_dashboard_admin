import express from "express";
import { getProducts } from "../controllers/client.js";

const clientRouter = express.Router()

clientRouter.get("/products", getProducts)

export default clientRouter