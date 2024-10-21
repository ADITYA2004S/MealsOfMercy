import { compare } from "bcryptjs";

import UserModel from "../../models/UserModel";

import { validatePassword } from "../../utils/getGeneralValidation";

const loginOrganizer = async (email: string, password: string) => {
  const dbUser = await UserModel.findOne({ email });

  if (!dbUser) {
    throw new Error("User With Given Email Address Does Not Exist");
  }

  validatePassword(password);

  if (!(await compare(password, dbUser.password))) {
    throw new Error("Invalid Password");
  }

  return {
    id: dbUser.id,
    name: dbUser.name,
    email: dbUser.email,
    mobile: dbUser.mobile,
  };
};

export default loginOrganizer;
