//Libraries
import express from "express";

//database Model
import {FoodModel} from "../../database/allModel";

const Router = express.Router();

/* 
Route           food/r/:_id
Desc            Get all food based on a particular restaurant
Params          id
Access          public
Method          get
*/
Router.get("/r/:_id", async (req, res) => {
    try{
        const {_id} = req.params;
        const foods = await FoodModel.find({restaurant: _id});

        return res.json({foods});
    }
    catch(error){
        return res.status(500).json({error: error.message});
    }
});

/* 
Route           food/c/:category
Desc            Get all food based on particular category
Params          category
Access          public
Method          get
*/
Router.get("/c/:category", async (req, res) => {
    try{
        const {category} = req.params;
        const foods = await FoodModel.find({category: {$regex: category, $options:'i'}});
        res.json({foods});
    }
    catch(error){
        return res.status(500).json({error:error.message});
    }
});

export default Router;