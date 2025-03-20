import restaurantController from "./controllers/restaurant.controller";

import express from "express";
const routerAdmin = express.Router();

routerAdmin.get('/', restaurantController.goHome);

routerAdmin
   .get('/signup', restaurantController.getSignUp)
   .post('/signup', restaurantController.processSignUp);

routerAdmin
   .get('/login', restaurantController.getLogin)
   .post('/login', restaurantController.processLogin);

routerAdmin.get('/logout', restaurantController.logout)

routerAdmin.get('/checkauth', restaurantController.checkAuth)



export default routerAdmin;