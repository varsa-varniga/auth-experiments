import { loginUser, registerUser, logoutUser, getUserProfile } from "../services/auth.service.js";
import { HTTP_STATUS } from "../constants/http.constants.js";

//REGISTER
export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(HTTP_STATUS.BAD_REQUEST).json(
                {
                    success: false,
                    message: "Name, email, password all are required"
                }
            );
        }
        const user = await registerUser({ name, email, password });
        return res.status(HTTP_STATUS.CREATED).json(
            {
                success: true,
                message: "Account Created successfully. Please Login",
                data: user
            }
        );
    } catch (error) {
        console.log("Register controller error", error);
        return res.status(error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json(
            {
                success: false,
                message: error.message || "Something went Wrong"
            }
        );
    }
};

//LOGIN
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(HTTP_STATUS.BAD_REQUEST).json(
                {
                    success: false,
                    message: "email and password are required"
                }
            );
        }
        const data = await loginUser({ email, password });
        return res.status(HTTP_STATUS.OK).json(
            {
                success: true,
                message: "Logged in successfully",
                data
            }
        );
    } catch (error) {
        console.log("Login controller error", error);
        res.status(error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json(
            {
                success: false,
                message: error.message || "something went wrong, Try again later."
            }
        );
    }
};

//LOGOUT
export const logout = async (req, res) => {
    try {
        await logoutUser(req.user);
        return res.status(HTTP_STATUS.OK).json(
            {
                success: true,
                message: "Logged out successfully."
            }
        );
    } catch (error) {
        console.log("Logout controller error");
        req.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(
            {
                success: false,
                message: "Something went wrong"
            }
        );
    }
};

//GET USER PROFILE
export const getProfile = async (req, res) => {
    try {
        const user = await getUserProfile(req.user);
        res.status(HTTP_STATUS.OK).json(
            {
                success: true,
                message: "User profile fetched",
                user
            }
        );
    } catch (error) {
        console.log("Get Profile Error");
        res.status(error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json(
            {
                success: false,
                message: error.message || " Something went wrong"
            }
        );
    }
};
