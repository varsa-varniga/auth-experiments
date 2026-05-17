import User from "../models/User.js";
import { HTTP_STATUS } from "../constants/http.constants.js";

const protect = async (req, res, next) => {
    try {
        const authHeader = req.header.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer")) {
            return res.status(HTTP_STATUS.UNAUTHORIZED).json({
                success: false,
                message: "Access denied, No token provided"
            }
            );
        }

        const token = authHeader.split(" ")[1];
        const user = await User.findOne({ token });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid or expire token, Please login again"
            });
        }
        req.user = user;
        next();
    } catch (error) {
        console.error("Auth middlewear error ", error);
        return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(
            {
                success: false,
                message: "Server error during Authentication"
            }
        );
    }
};

export default protect;
