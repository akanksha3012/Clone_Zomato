//libraries
import express from "express";

//database modal
import {UserModel} from "../../database/allModel";

const Router = express.Router();

/* 
Route           /review/:_id
Desc            get user data
Params          _id
Access          public
Method          get
*/
Router.get("/:_id", async (req, res) => {
    try{
        const {_id} = req.params;
        const getUser = await UserModel.findById(_id);
        if(!getUser)
        return res.status(200).json({error: "User not found"});
        return res.json({user: getUser});
    }
    catch(error){
        return res.status(500).json({error: error.message});
    }
});
/* 
Route           /review/:_id
Desc            update user data
Body            user data
Access          public
Method          get
*/
Router.put("/update/:userId", async (req, res) => {
    try{
        const {userId} = req.params;
        const {userData} = req.body;
        const updateUserData = await UserModel.findByIdAndUpdate(
            {
                userData,
            },
            {
                $set: userData,
            },
            {
                new: true,
            },
        );
       
        return res.json({user: updateUserData});
    }
    catch(error){
        return res.status(500).json({error: error.message});
    }
});

export default Router;