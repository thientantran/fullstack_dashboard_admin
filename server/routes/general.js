import express from "express";
import { getAllUser, getDashboardStats, getUser } from "../controllers/general.js";

const generalRouter = express.Router()

generalRouter.get("/admin/:id", getUser)
generalRouter.get("/admin/", getAllUser)
generalRouter.get("/dashboard", getDashboardStats);

export default generalRouter;