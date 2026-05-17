import User from "../models/User.js";
import {hashPassword, comparePassword, createToken} from "../utils/auth.util.js";
import { HTTP_STATUS } from "../constants/http.constants.js";


//custom error message 
const createError = (message, STATUS_CODE) => {
    const error = new Error(message);
    error.statusCode = STATUS_CODE;
    return error;
};


//REGISTER USER

export const registerUser  = async ({name, email, password}) => {
    const existingUser = await User.findOne({email});

    if(existingUser) {
        throw createError("User with this email already exists",HTTP_STATUS.CONFLICT);
    }
    const hashedPassword = await hashPassword(password);

    const user = await User.create({
        name,
        email,
        password : hashedPassword
    });
    return  {
        id : user._id,
        name : user.name,
        email : user.email
    };

};



//LOGIN USER

export const loginUser = async ({email, password}) => {
     const user  = await User.findOne({email});
     if(!user) {
        throw createError("Invalid email or password",HTTP_STATUS.UNAUTHORIZED);
     }
     const isValidPassword = await comparePassword(password,user.password);
     if(!isValidPassword) {
        throw createError("Incorrect Password",HTTP_STATUS.UNAUTHORIZED);
     }
     const token = await createToken();
     user.token = token;
     await user.save();
     return {
        id : user._id,
        name : user.name, 
        email : user.email,
        token : user.token
     };
};


//LOGOUT USER 
export const logoutUser = async (user) => {
   user.token = null;
   await user.save(); 
}



//USER PROFILE 
export const getUserProfile = async (user) => {
    return {
        id : user._id,
        name : user.name,
        email : user.email,
        createdAt : user.createdAt
    };
};