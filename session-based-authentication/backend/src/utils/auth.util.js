import crypto from "crypto";
import bcrypt from "bcryptjs";

const SALT_ROUND = 12;

export const hashPassword = (password) => {
    return bcrypt.hash(password,SALT_ROUND);
};


export const comparePassword = (password, passwordHash) => {
    return bcrypt.compare(password, passwordHash);
};

export const createToken = () => {
    return crypto.randomBytes(32).toString("hex");
};