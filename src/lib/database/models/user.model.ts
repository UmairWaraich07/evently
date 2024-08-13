import { Document, Model, model, models, Schema } from "mongoose";

export interface IUser extends Document {
  clerkId: string;
  email: string;
  username: string;
  firstname: string;
  lastname: string;
  password: string;
  photo: string;
}

const UserSchema: Schema<IUser> = new Schema(
  {
    clerkId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true, index: true },
    username: { type: String, required: true, unique: true, index: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    password: { type: String, required: true },
    photo: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const userModel =
  (models.User as Model<IUser>) || model<IUser>("User", UserSchema);
export default userModel;
