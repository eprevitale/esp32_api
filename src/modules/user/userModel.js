import mongoose from "mongoose";
import UserSchema from "./userSchema.js";

const User = mongoose.model("User", UserSchema, "users");

export default User;