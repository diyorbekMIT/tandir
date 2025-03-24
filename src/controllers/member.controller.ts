import MemberService from "../models/Member.Service";
import { T } from "../libs/types/common";
import express, { NextFunction, Request, Response } from "express";
import Errors, { HttpCode, Message } from "../libs/Errrors";
import { AdminRequest } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";




const memberController: T = {};

const memberService = new MemberService()

memberController.login = async (req: Request, res: Response) => {
  try {
    const input = req.body,
    result = await memberService.login(input);
    res.json({member: result});
  } catch (err) {
      console.log("ERROR on RestaurantProcessLogin", err);
      if (err instanceof Errors) res.status(err.code).json(err);
      else res.status(HttpCode.INTERNAL_SERVER_ERROR).json(Errors.standard)

  }             
}

memberController.signup = async (req: Request, res: Response) => {
  try {
    const newMember = req.body,
     result = await memberService.signup(newMember);
    console.log(result);
    res.json({member: result})
  } catch (err) {
      console.log("ERROR on RestaurantProcessSignUp", err);
      if (err instanceof Errors) res.status(err.code).json(err);
      else res.status(HttpCode.INTERNAL_SERVER_ERROR).json(Errors.standard)
  }
}

memberController.verifyRestaurant = async (req: AdminRequest, res: Response, next: NextFunction) => {
  if (req.session?.member?.memberType === MemberType.RESTAURANT) {
      req.member = req.session.member;
      next();
  } else {
      const message = Message.NOT_AUTHONTICATED; // ✅ Fixed spelling
      res.send(`
          <script>
              alert("${message}");
              window.location.replace("/admin/login");
          </script>
      `);
  }
};


export default memberController;