import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    fullName: string;
}

const UserSchema: Schema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    fullName: { type: String, required: true },
});

export default mongoose.model<IUser>("User", UserSchema);
