// Library
import express from 'express';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

//Model
import {UserModel} from '../../database/user/index';

const Router = express.Router();

/*
Route           /auth/signup
Desc            Register new user
Params          none
Access          public
Method          post
*/
Router.post("/signup", async (req, res) => {
    try{
        const {email, password, fullName, phoneNumber} = req.body.credentials;
        const checkUserByEmail = await UserModel.findOne({email});
        const checkUserByPhone = await UserModel.findOne({phoneNumber});

        if(checkUserByEmail || checkUserByPhone){
            return res.json({email: "user already exists!"});
        }
        //hash password
        const bcryptSalt = await bcryptjs.genSalt(8);
        // await is used as salting takes time
        const hashedPassword = await bcryptjs.hash(password, bcryptSalt);

        // save to database
        await UserModel.create({
            ...req.body.credentials, 
            password: hashedPassword,
        });

        // generate JWT Auth tokens
        const token = jwt.sign({ user: {fullName, email}}, "ZomatoApp");

        return res.status(200).json({token, status:"success"});

    }catch(error){
        return res.status(500).json({error:error.message });
    }
});

export default Router;
