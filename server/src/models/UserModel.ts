import { Schema, ObjectId, model } from "mongoose";

export interface User {
  _id?: ObjectId;
  id: string;
  name: string;
  email: string;
  mobile: number;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const userSchema = new Schema<User>(
  {
    id: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
    name: {
      type: Schema.Types.String,
      required: true,
      minlength: [4, "User's Name Must Be A Minimum of 4 Characters"],
      maxlength: [50, "User's Name Must Be A Maximum of 50 Characters"],
    },
    email: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
    mobile: {
      type: Schema.Types.Number,
      required: true,
      unique: false,
      min: [
        6000000000,
        "Mobile Number Must Be 10 Digits and Starts With 6, 7, 8, or 9",
      ],
      max: [
        9999999999,
        "Mobile Number Must Be 10 Digits and Starts With 6, 7, 8, or 9",
      ],
    },
    password: {
      type: Schema.Types.String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = model("user", userSchema);

export default UserModel;
