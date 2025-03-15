import restaurantController from "./controllers/restaurant.controller";

import express from "express";
const routerAdmin = express.Router();

routerAdmin.get('/', restaurantController.goHome)

export default routerAdmin;