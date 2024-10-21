import { Error } from "mongoose";
import { hash } from "bcryptjs";

import UserMode from "../../models/UserModel";

import getUniqueID from "../../utils/getUniqueID";

import { validatePassword } from "../../utils/getGeneralValidation";

const registerUser = async (
  name: string,
  email: string,
  mobile: number,
  password: string,
  confirmPassword: string
) => {
  let dbUser = await UserMode.findOne({ email });

  if (dbUser) {
    throw new Error("User With Given Email Address Already Exists");
  }

  dbUser = await UserMode.findOne({ mobile });

  if (dbUser) {
    throw new Error("User With Given Mobile Number Already Exists");
  }

  if (password !== confirmPassword) {
    throw new Error("Passwords Do Not Match");
  }

  validatePassword(password);

  const encryption = await hash(password, 12);

  let id: string;

  while (true) {
    id = getUniqueID("", 10);
    if (!(await UserMode.exists({ id }))) break;
  }

  const newOrganizer = new UserMode({
    id,
    name,
    email,
    mobile,
    password: encryption,
  });

  try {
    const createdOrganizer = await newOrganizer.save();

    return {
      id: createdOrganizer.id,
      name: createdOrganizer.name,
      email: createdOrganizer.email,
      mobile: createdOrganizer.mobile,
    };
  } catch (error) {
    const validationError = error as Error.ValidationError;

    for (const key in validationError.errors) {
      if (!validationError.errors[key].message) continue;
      throw new Error(validationError.errors[key].message);
    }

    throw new Error("Failed To Register User Due To Server Error");
  }
};

export default registerUser;
