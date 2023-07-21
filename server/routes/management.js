import expess from "express";
import { getAdmins, getUserPerformace } from "../controllers/management.js";
const managementRouter = expess.Router()

managementRouter.get("/admins", getAdmins);
managementRouter.get("/performance/:id", getUserPerformace);
export default managementRouter