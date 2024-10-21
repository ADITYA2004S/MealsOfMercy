import { Error } from "mongoose";

import UserModel, { User } from "../../models/UserModel";

const updateUser = async (email: string, user: User) => {
  const dbUser = await UserModel.findOne({ email });

  if (!dbUser) {
    throw new Error("User With Given Email Address Does Not Exist");
  }

  dbUser.name = user.name || dbUser.name;

  if (user.mobile) {
    const exists = await UserModel.exists({ mobile: user.mobile });

    if (exists) {
      throw new Error("User With Given Mobile Number Already Exists");
    }

    dbUser.mobile = user.mobile;
  }

  try {
    const updatedUser = await dbUser.save();
    return updatedUser.save();
  } catch (error) {
    const validationError = error as Error.ValidationError;

    for (const key in validationError.errors) {
      if (!validationError.errors[key].message) continue;
      throw new Error(validationError.errors[key].message);
    }

    throw new Error("Failed To Update User Due To Server Error");
  }
};

export default updateUser;
