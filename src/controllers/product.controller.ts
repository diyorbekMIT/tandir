import { AdminRequest } from "../libs/types/member";
import { T } from "../libs/types/common";
import Errors from "../libs/Errrors";
import  { Response } from "express";


const productController: T = {};

productController.getAllProducts = async (req: AdminRequest, res: Response) => {
    try {
        console.log("getAllProducts");
        res.render("products");
      

        // TODO: Token
    } catch (err) {
        console.log("Error, getAllProducts", err);
        if (err instanceof Errors) res.status(err.code).json(err)
        else res.status(Errors.standard.code).json(Errors.standard)
    }
};

productController.createProduct = async (req: AdminRequest, res: Response) => {
    try{
        console.log("createProduct");
        

        // TODO: Token
    } catch (err) {
        console.log("Error, createProduct", err);
        if (err instanceof Errors) res.status(err.code).json(err)
        else res.status(Errors.standard.code).json(Errors.standard)
    }
}
export default productController;