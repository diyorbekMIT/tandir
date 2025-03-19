import MemberService from "../models/Member.Service";
import { T } from "../libs/types/common";
import express, { Request, Response } from "express";
import { MemberType } from "../libs/enums/member.enum";


const restaurantController : T = {};

restaurantController.goHome = (req: Request, res: Response) => {
    try {
      res.send("RESTAURANT HOME PAGE")
    } catch (err) {
        console.log("ERROR on RestaurantHomePage", err);
    }
}

restaurantController.getSignUp = (req: Request, res: Response) => {
    try {
      res.send("RESTAURANT SIGN UP PAGE")
    } catch (err) {
        console.log("ERROR on RestaurantSignUpPage", err);
    }
}

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
      res.send("RESTAURANT LOGIN PAGE")
    } catch (err) {
        console.log("ERROR on RestaurantLoginPage", err);
    }
}

restaurantController.processLogin = async (req: Request, res: Response) => {
    try {
      const input = req.body;
      const memberService = new MemberService();
      const result = await memberService.processLogin(input);
      res.send(result);
    } catch (err) {
        console.log("ERROR on RestaurantProcessLogin", err);
        res.send(err)
        console.log(err);

    }
}

restaurantController.processSignUp = async (req: Request, res: Response) => {
    try {
      const newMember = req.body;
      newMember.memberType = MemberType.RESTAURANT;

      const memberService = new MemberService();
      const result = await memberService.processSignup(newMember);
      console.log(result);
      res.send(result)
    } catch (err) {
        console.log("ERROR on RestaurantProcessSignUp", err);
        res.send(err);
    }
}


export default restaurantController;