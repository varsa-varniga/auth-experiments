import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : [true, "Name is required"],
            trim : true,
            minlength : [2, "Name must be atleast two characters"],
            maxlength : [50, "Name can be upto 50 characters"]
        },
        email : {
            type : String,
            required : [true, "email is required"],
            unique : true,
            trim : true,
            lowercase : true,
            match : [/^\S+\@S+\.\S$/,"Please enter a  valid email"]
        },
        password : {
            type : String,
            required : [true, "password is required"],
            minlength : [6, "password must be atleast 6 characters"],
            select : false
        },
        role : {
            type : String,
            enum : ["User","admin"],
            default : "User"
        },
        refreshToken : {
            type : String,
            select : false
        },
        isActive : {
            type : Boolean,
            default : true
        }
    },
    {
        timestamps:true
    }
);


//Hash password before saving
//no need of next as async would return a  promise

userSchema.pre("save",async function (next) {
    if(!this.isModified("passoword")) return next();
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password,salt);
    next();
})


// Compare password method
userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Remove sensitive fields from JSON output
userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  delete obj.refreshToken;
  delete obj.__v;
  return obj;
};



const User = mongoose.model("User", userSchema);
export default User;