import { T } from "../libs/types/common";
import express, { Request, Response } from "express";


const memberController : T = {};

memberController.goHome = (req: Request, res: Response) => {
    try {
      res.send("HOME PAGE")
    } catch (err) {
        console.log("ERROR on HomePage", err);
    }  
};

memberController.getLogin = (req: Request, res: Response) => {
    try {
      res.send("HOME PAGE")
    } catch (err) {
        console.log("ERROR on HomePage", err);
    }  
};

memberController.getSignup = (req: Request, res: Response) => {
    try {
      res.send("SIGN up PAGE")
    } catch (err) {
        console.log("ERROR on SignUpPage", err);
    }
}

export default memberController;