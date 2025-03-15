import { T } from "../libs/types/common";
import express, { Request, Response } from "express";


const restaurantController : T = {};

restaurantController.goHome = (req: Request, res: Response) => {
    try {
      res.send("RESTAURANT HOME PAGE")
    } catch (err) {
        console.log("ERROR on RestaurantHomePage", err);
    }
}

export default restaurantController;